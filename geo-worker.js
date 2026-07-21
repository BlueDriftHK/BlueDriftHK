/**
 * geo-worker.js — 访客地理分布统计（Cloudflare Workers + KV）
 *
 * 部署步骤：
 *   1. 创建 KV 命名空间：  wrangler kv namespace create GEO_KV
 *      把返回的 id 填入 wrangler.toml 的 [[kv_namespaces]] binding = "GEO_KV"
 *   2. 部署 Worker：       wrangler deploy geo-worker.js --name geo-stats
 *   3. 绑定到 api.bjhr.space 的 /geo 路由。
 *
 * 端点：
 *   GET /geo          返回 { regions: [{ name, flag, lat, lon, count }] }（按访问量降序）
 *   GET /geo/track    记录一次当前访客（用 request.cf.country），返回 { ok:true, country }
 *                     建议在首页加载时以 fetch(..., {mode:'no-cors'}) 静默调用，或用 Beacon。
 *
 * 数据来源：Cloudflare 自动注入的 request.cf.country（ISO 3166-1 alpha-2）。
 */

// 国家代码 → { 中文名, 国旗 emoji, 纬度, 经度 }
const COUNTRIES = {
    CN: { name: '中国', flag: '🇨🇳', lat: 31.23, lon: 121.47 },
    US: { name: '美国', flag: '🇺🇸', lat: 37.77, lon: -122.42 },
    JP: { name: '日本', flag: '🇯🇵', lat: 35.68, lon: 139.69 },
    DE: { name: '德国', flag: '🇩🇪', lat: 52.52, lon: 13.40 },
    SG: { name: '新加坡', flag: '🇸🇬', lat: 1.35, lon: 103.82 },
    GB: { name: '英国', flag: '🇬🇧', lat: 51.51, lon: -0.13 },
    IN: { name: '印度', flag: '🇮🇳', lat: 19.07, lon: 72.88 },
    BR: { name: '巴西', flag: '🇧🇷', lat: -23.55, lon: -46.63 },
    KR: { name: '韩国', flag: '🇰🇷', lat: 37.57, lon: 126.98 },
    FR: { name: '法国', flag: '🇫🇷', lat: 48.86, lon: 2.35 },
    CA: { name: '加拿大', flag: '🇨🇦', lat: 43.65, lon: -79.38 },
    AU: { name: '澳大利亚', flag: '🇦🇺', lat: -33.87, lon: 151.21 },
    RU: { name: '俄罗斯', flag: '🇷🇺', lat: 55.76, lon: 37.62 },
    NL: { name: '荷兰', flag: '🇳🇱', lat: 52.37, lon: 4.90 },
    HK: { name: '中国香港', flag: '🇭🇰', lat: 22.32, lon: 114.17 },
    TW: { name: '中国台湾', flag: '🇹🇼', lat: 25.03, lon: 121.57 },
};

const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

function json(obj, init) {
    return new Response(JSON.stringify(obj), {
        ...init,
        headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS, ...(init && init.headers) },
    });
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: CORS });
        }

        // 记录一次访客
        if (url.pathname === '/geo/track') {
            const cc = (request.cf && request.cf.country) || 'XX';
            if (env.GEO_KV && cc !== 'XX') {
                const cur = parseInt((await env.GEO_KV.get('c:' + cc)) || '0', 10);
                await env.GEO_KV.put('c:' + cc, String(cur + 1));
            }
            return json({ ok: true, country: cc });
        }

        // 返回聚合结果
        if (url.pathname === '/geo' || url.pathname === '/geo/') {
            const regions = [];
            if (env.GEO_KV) {
                const list = await env.GEO_KV.list({ prefix: 'c:' });
                for (const key of list.keys) {
                    const cc = key.name.slice(2);
                    const meta = COUNTRIES[cc];
                    const count = parseInt((await env.GEO_KV.get(key.name)) || '0', 10);
                    if (meta && count > 0) {
                        regions.push({ name: meta.name, flag: meta.flag, lat: meta.lat, lon: meta.lon, count });
                    }
                }
            }
            regions.sort((a, b) => b.count - a.count);
            return json({ regions, updatedAt: new Date().toISOString() }, {
                headers: { 'Cache-Control': 'public, max-age=300, s-maxage=300' },
            });
        }

        return json({ error: 'Not found. Use /geo or /geo/track' }, { status: 404 });
    },
};
