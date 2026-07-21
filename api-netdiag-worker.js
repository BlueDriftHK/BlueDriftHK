/**
 * api-netdiag-worker.js
 * Cloudflare Worker — 为 blog.bjhr.space 主页提供网络诊断 / 运维 API
 * 部署到 api.bjhr.space (或任意 Workers 路由)
 *
 * 端点一览:
 *   GET /api/ip          → 访客 IP 信息 (cf 对象)
 *   GET /api/headers     → 回显请求头
 *   GET /api/dns         → DNS over HTTPS 查询代理
 *   GET /api/ping        → HTTP 延迟探测 (模拟 ping)
 *   GET /api/http-check  → HTTP 状态检测
 *   GET /api/health      → 服务健康检查
 *   GET /api/traceroute  → 逐跳探测 (HTTP 模拟)
 *   GET /api/logs        → SSE 实时日志流 (模拟)
 *   GET /api/latency     → 全球节点延迟探测
 */

const ALLOWED_ORIGINS = [
  'https://blog.bjhr.space',
  'http://localhost:5500',
  'http://localhost:8080',
  'http://127.0.0.1:5500',
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function json(data, origin, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...corsHeaders(origin),
    },
  });
}

/* ---------- /api/ip ---------- */
function handleIP(request, cf) {
  const origin = request.headers.get('Origin') || '';
  return json({
    ip: request.headers.get('CF-Connecting-IP') || 'unknown',
    country: cf?.country || '--',
    countryName: cf?.countryName || '',
    region: cf?.region || '',
    city: cf?.city || '',
    latitude: cf?.latitude || null,
    longitude: cf?.longitude || null,
    isp: cf?.asOrganization || 'unknown',
    asn: cf?.asn || null,
    colo: cf?.colo || '',           // 处理请求的 CF PoP 机场代码
    httpProtocol: cf?.httpProtocol || request.headers.get('CF-Client-HTTP-Protocol') || 'unknown',
    tlsVersion: request.headers.get('CF-Client-TLS-Version') || '',
    tlsCipher: request.headers.get('CF-Client-TLS-Cipher') || '',
    botManagement: {
      score: cf?.botManagement?.score ?? null,
      verifiedBot: cf?.botManagement?.verifiedBot ?? false,
    },
    timestamp: Date.now(),
  }, origin);
}

/* ---------- /api/headers ---------- */
function handleHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const headers = {};
  request.headers.forEach((v, k) => { headers[k] = v; });
  return json({ headers, timestamp: Date.now() }, origin);
}

/* ---------- /api/dns ---------- */
async function handleDNS(request, url) {
  const origin = request.headers.get('Origin') || '';
  const name = url.searchParams.get('name');
  const type = (url.searchParams.get('type') || 'A').toUpperCase();
  if (!name) return json({ error: 'Missing ?name= parameter' }, origin, 400);

  try {
    const dohUrl = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`;
    const resp = await fetch(dohUrl, {
      headers: { 'Accept': 'application/dns-json' },
    });
    const data = await resp.json();
    return json({
      query: { name, type },
      status: data.Status,
      answers: (data.Answer || []).map(a => ({
        name: a.name,
        type: a.type,
        TTL: a.TTL,
        data: a.data,
      })),
      authoritative: data.AD || false,
      truncated: data.TC || false,
      timestamp: Date.now(),
    }, origin);
  } catch (e) {
    return json({ error: 'DNS query failed: ' + e.message }, origin, 502);
  }
}

/* ---------- /api/ping ---------- */
async function handlePing(request, url) {
  const origin = request.headers.get('Origin') || '';
  const host = url.searchParams.get('host');
  const count = Math.min(parseInt(url.searchParams.get('count') || '4', 10), 10);
  if (!host) return json({ error: 'Missing ?host= parameter' }, origin, 400);

  const target = host.startsWith('http') ? host : `https://${host}`;
  const results = [];

  for (let i = 0; i < count; i++) {
    const start = performance.now();
    try {
      const resp = await fetch(target, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(5000) });
      const rtt = Math.round((performance.now() - start) * 100) / 100;
      results.push({ seq: i + 1, status: resp.status, rtt_ms: rtt, ok: true });
    } catch (e) {
      const rtt = Math.round((performance.now() - start) * 100) / 100;
      results.push({ seq: i + 1, rtt_ms: rtt, ok: false, error: e.message });
    }
  }

  const okResults = results.filter(r => r.ok);
  const rtts = okResults.map(r => r.rtt_ms);
  const stats = rtts.length ? {
    min: Math.min(...rtts),
    max: Math.max(...rtts),
    avg: Math.round(rtts.reduce((a, b) => a + b, 0) / rtts.length * 100) / 100,
    loss: `${((count - okResults.length) / count * 100).toFixed(1)}%`,
  } : { min: null, max: null, avg: null, loss: '100%' };

  return json({ host, target, count, results, stats, timestamp: Date.now() }, origin);
}

/* ---------- /api/http-check ---------- */
async function handleHTTPCheck(request, url) {
  const origin = request.headers.get('Origin') || '';
  const target = url.searchParams.get('url');
  if (!target) return json({ error: 'Missing ?url= parameter' }, origin, 400);

  const fullUrl = target.startsWith('http') ? target : `https://${target}`;
  const start = performance.now();
  try {
    const resp = await fetch(fullUrl, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(10000) });
    const elapsed = Math.round((performance.now() - start) * 100) / 100;
    const respHeaders = {};
    resp.headers.forEach((v, k) => { respHeaders[k] = v; });
    return json({
      url: fullUrl,
      status: resp.status,
      statusText: resp.statusText,
      ok: resp.ok,
      redirected: resp.redirected,
      finalUrl: resp.url,
      timing_ms: elapsed,
      headers: respHeaders,
      server: resp.headers.get('server') || '',
      contentType: resp.headers.get('content-type') || '',
      timestamp: Date.now(),
    }, origin);
  } catch (e) {
    const elapsed = Math.round((performance.now() - start) * 100) / 100;
    return json({ url: fullUrl, ok: false, error: e.message, timing_ms: elapsed, timestamp: Date.now() }, origin, 502);
  }
}

/* ---------- /api/health ---------- */
async function handleHealth(request) {
  const origin = request.headers.get('Origin') || '';
  const services = [
    { name: 'Blog', url: 'https://blog.bjhr.space' },
    { name: 'API', url: 'https://api.bjhr.space/api/health' },
    { name: 'GitHub Pages', url: 'https://bluedrifthk.github.io' },
  ];

  const results = await Promise.all(services.map(async (svc) => {
    const start = performance.now();
    try {
      const resp = await fetch(svc.url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(5000) });
      const latency = Math.round((performance.now() - start) * 100) / 100;
      return { ...svc, status: resp.status, up: resp.ok, latency_ms: latency };
    } catch (e) {
      const latency = Math.round((performance.now() - start) * 100) / 100;
      return { ...svc, status: 0, up: false, latency_ms: latency, error: e.message };
    }
  }));

  return json({ services: results, timestamp: Date.now() }, origin);
}

/* ---------- /api/traceroute ---------- */
async function handleTraceroute(request, url) {
  const origin = request.headers.get('Origin') || '';
  const host = url.searchParams.get('host');
  if (!host) return json({ error: 'Missing ?host= parameter' }, origin, 400);

  // 浏览器/Workers 无法发送 ICMP TTL 包，用 HTTP 逐跳模拟
  // 生成一条合理的路径 (基于 CF 网络拓扑)
  const target = host.replace(/^https?:\/\//, '');
  const hops = [
    { hop: 1, host: 'gateway.local', ip: '192.168.1.1', rtt_ms: 1.2 },
    { hop: 2, host: 'isp-core.router', ip: '10.0.0.1', rtt_ms: 5.8 },
    { hop: 3, host: 'cf-edge.' + (request.cf?.city || 'hkg').toLowerCase() + '.cloudflare.com', ip: '104.16.0.1', rtt_ms: 8.3 },
    { hop: 4, host: 'cf-backbone.cloudflare.com', ip: '172.64.0.1', rtt_ms: 12.1 },
    { hop: 5, host: target, ip: null, rtt_ms: null },
  ];

  // 尝试解析目标 IP
  try {
    const dohResp = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(target)}&type=A`, {
      headers: { 'Accept': 'application/dns-json' },
    });
    const dohData = await dohResp.json();
    if (dohData.Answer && dohData.Answer.length) {
      hops[hops.length - 1].ip = dohData.Answer[0].data;
    }
  } catch (_) {}

  // 测量实际延迟
  const fullUrl = host.startsWith('http') ? host : `https://${host}`;
  const start = performance.now();
  try {
    await fetch(fullUrl, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(5000) });
    hops[hops.length - 1].rtt_ms = Math.round((performance.now() - start) * 100) / 100;
  } catch (_) {
    hops[hops.length - 1].rtt_ms = Math.round((performance.now() - start) * 100) / 100;
  }

  return json({ target, hops, timestamp: Date.now() }, origin);
}

/* ---------- /api/logs (SSE) ---------- */
function handleLogs(request) {
  const origin = request.headers.get('Origin') || '';
  const encoder = new TextEncoder();

  const methods = ['GET', 'GET', 'GET', 'POST', 'GET', 'HEAD'];
  const paths = ['/', '/index.html', '/api/ip', '/api/dns?name=example.com', '/assets/style.css', '/favicon.ico', '/api/health', '/blog/post-1'];
  const statuses = [200, 200, 200, 200, 301, 304, 404, 200, 200];
  const countries = ['CN', 'US', 'JP', 'DE', 'GB', 'SG', 'HK', 'KR', 'AU'];
  const colos = ['HKG', 'NRT', 'SJC', 'FRA', 'LHR', 'SIN', 'ICN', 'SYD', 'LAX'];

  function randomLog() {
    const method = methods[Math.floor(Math.random() * methods.length)];
    const path = paths[Math.floor(Math.random() * paths.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const colo = colos[Math.floor(Math.random() * colos.length)];
    const latency = (Math.random() * 80 + 2).toFixed(1);
    const ip = `${Math.floor(Math.random()*223+1)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`;
    const time = new Date().toISOString();
    return JSON.stringify({ time, ip, method, path, status, country, colo, latency_ms: parseFloat(latency) });
  }

  const stream = new ReadableStream({
    start(controller) {
      // 立即发送一条
      controller.enqueue(encoder.encode(`data: ${randomLog()}\n\n`));

      const interval = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(`data: ${randomLog()}\n\n`));
        } catch (_) {
          clearInterval(interval);
        }
      }, 1500 + Math.random() * 2000);

      // 60 秒后自动关闭
      setTimeout(() => {
        clearInterval(interval);
        try { controller.close(); } catch (_) {}
      }, 60000);
    },
    cancel() {},
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      ...corsHeaders(origin),
    },
  });
}

/* ---------- /api/latency ---------- */
async function handleLatency(request) {
  const origin = request.headers.get('Origin') || '';
  // 探测多个 CF PoP (通过不同子域名或路径无法直接指定 PoP，用公共端点模拟)
  const endpoints = [
    { name: 'Hong Kong (HKG)', url: 'https://blog.bjhr.space' },
    { name: 'Tokyo (NRT)', url: 'https://www.cloudflare.com/cdn-cgi/trace' },
    { name: 'Singapore (SIN)', url: 'https://cloudflare-dns.com/dns-query?name=example.com&type=A' },
    { name: 'San Jose (SJC)', url: 'https://workers.cloudflare.com' },
    { name: 'Frankfurt (FRA)', url: 'https://www.google.com/generate_204' },
  ];

  const results = await Promise.all(endpoints.map(async (ep) => {
    const start = performance.now();
    try {
      await fetch(ep.url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(5000), headers: { 'Accept': 'application/dns-json' } });
      return { name: ep.name, latency_ms: Math.round((performance.now() - start) * 100) / 100, ok: true };
    } catch (e) {
      return { name: ep.name, latency_ms: Math.round((performance.now() - start) * 100) / 100, ok: false };
    }
  }));

  return json({
    from_colo: request.cf?.colo || 'unknown',
    from_city: request.cf?.city || '',
    from_country: request.cf?.country || '',
    endpoints: results,
    timestamp: Date.now(),
  }, origin);
}

/* ---------- Router ---------- */
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const origin = request.headers.get('Origin') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // 只允许 GET
    if (request.method !== 'GET') {
      return json({ error: 'Method not allowed' }, origin, 405);
    }

    switch (path) {
      case '/api/ip':
        return handleIP(request, request.cf);
      case '/api/headers':
        return handleHeaders(request);
      case '/api/dns':
        return handleDNS(request, url);
      case '/api/ping':
        return handlePing(request, url);
      case '/api/http-check':
        return handleHTTPCheck(request, url);
      case '/api/health':
        return handleHealth(request);
      case '/api/traceroute':
        return handleTraceroute(request, url);
      case '/api/logs':
        return handleLogs(request);
      case '/api/latency':
        return handleLatency(request);
      default:
        return json({
          name: 'NetSight API',
          version: '2.0.0',
          endpoints: [
            'GET /api/ip',
            'GET /api/headers',
            'GET /api/dns?name=example.com&type=A',
            'GET /api/ping?host=example.com&count=4',
            'GET /api/http-check?url=https://example.com',
            'GET /api/health',
            'GET /api/traceroute?host=example.com',
            'GET /api/logs  (SSE)',
            'GET /api/latency',
          ],
        }, origin);
    }
  },
};
