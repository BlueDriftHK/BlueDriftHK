/**
 * og-worker.js — 动态 OG 图片生成器（Cloudflare Workers，零构建依赖）
 *
 * 部署：把本文件作为 Worker 部署，并绑定到 api.bjhr.space 的 /og 路由。
 *   wrangler deploy og-worker.js --name og-image
 *   或在 dashboard 中粘贴本文件内容。
 *
 * 用法（query 参数均可选）：
 *   https://api.bjhr.space/og?title=BlueDriftHK&subtitle=边缘计算架构师&theme=dark
 *
 *   title    主标题（默认 BlueDriftHK）
 *   subtitle 副标题（默认 边缘计算架构师）
 *   desc     描述行（默认 Cloudflare Workers 开发者）
 *   theme    dark | light（默认 dark）
 *   accent   主题色 hex，不含 #（默认 06b6d4 青蓝）
 *
 * 说明：返回自包含 SVG（内嵌 GitHub 头像 base64），CDN 缓存 1 天。
 *   SVG 对多数平台（Telegram / Discord / Slack 等）可用；
 *   若需 PNG 以兼容 X/LinkedIn，可在此基础上接入 Satori + resvg-wasm。
 */

const AVATAR_URL = 'https://github.com/BlueDriftHK.png';

function esc(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

async function fetchAvatarBase64() {
    try {
        const res = await fetch(AVATAR_URL, { cf: { cacheTtl: 86400 } });
        if (!res.ok) return null;
        const buf = await res.arrayBuffer();
        // btoa on binary
        const bytes = new Uint8Array(buf);
        let bin = '';
        const chunk = 0x8000;
        for (let i = 0; i < bytes.length; i += chunk) {
            bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
        }
        return 'data:image/png;base64,' + btoa(bin);
    } catch (_) {
        return null;
    }
}

function buildSvg(opts) {
    const dark = opts.theme !== 'light';
    const bg1 = dark ? '#0a0e1a' : '#f8fafc';
    const bg2 = dark ? '#111827' : '#eef2ff';
    const textPrimary = dark ? '#f1f5f9' : '#0f172a';
    const textSecondary = dark ? '#94a3b8' : '#475569';
    const accent = opts.accent || '06b6d4';
    const accent2 = '8b5cf6';
    const border = dark ? '#1e293b' : '#e2e8f0';

    const avatar = opts.avatar
        ? `<clipPath id="av"><circle cx="150" cy="315" r="70"/></clipPath>
           <image href="${opts.avatar}" x="80" y="245" width="140" height="140" clip-path="url(#av)"/>
           <circle cx="150" cy="315" r="70" fill="none" stroke="url(#grad)" stroke-width="3"/>`
        : `<circle cx="150" cy="315" r="70" fill="url(#grad)"/>
           <text x="150" y="335" font-size="60" text-anchor="middle" fill="#fff" font-family="Inter,sans-serif" font-weight="800">B</text>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#${accent}"/>
      <stop offset="1" stop-color="#${accent2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.9">
      <stop offset="0" stop-color="#${accent}" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${bg1}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="20" y="20" width="1160" height="590" rx="28" fill="${bg2}" stroke="${border}" stroke-width="1.5"/>
  ${avatar}
  <text x="270" y="290" font-size="72" font-weight="800" fill="${textPrimary}" font-family="Inter,system-ui,sans-serif">${esc(opts.title)}</text>
  <text x="272" y="352" font-size="34" font-weight="600" fill="url(#grad)" font-family="Inter,system-ui,sans-serif">${esc(opts.subtitle)}</text>
  <text x="272" y="404" font-size="24" fill="${textSecondary}" font-family="Inter,system-ui,sans-serif">${esc(opts.desc)}</text>
  <g font-family="Inter,system-ui,sans-serif">
    <rect x="272" y="470" width="200" height="60" rx="14" fill="none" stroke="#${accent}" stroke-width="1.5"/>
    <text x="372" y="500" font-size="26" font-weight="700" fill="${textPrimary}" text-anchor="middle">2.3k+</text>
    <text x="372" y="520" font-size="13" fill="${textSecondary}" text-anchor="middle">GitHub Stars</text>
    <rect x="492" y="470" width="200" height="60" rx="14" fill="none" stroke="#${accent2}" stroke-width="1.5"/>
    <text x="592" y="500" font-size="26" font-weight="700" fill="${textPrimary}" text-anchor="middle">NetSight</text>
    <text x="592" y="520" font-size="13" fill="${textSecondary}" text-anchor="middle"> flagship project</text>
  </g>
  <text x="1140" y="588" font-size="20" fill="${textSecondary}" text-anchor="end" font-family="Inter,system-ui,sans-serif">blog.bjhr.space</text>
</svg>`;
}

export default {
    async fetch(request) {
        const url = new URL(request.url);

        if (url.pathname !== '/og' && url.pathname !== '/og/') {
            return new Response('Not found. Use /og?title=...&subtitle=...', { status: 404 });
        }

        const params = url.searchParams;
        const opts = {
            title: params.get('title') || 'BlueDriftHK',
            subtitle: params.get('subtitle') || '边缘计算架构师',
            desc: params.get('desc') || 'Cloudflare Workers 开发者 · 开源工具构建者',
            theme: params.get('theme') || 'dark',
            accent: (params.get('accent') || '06b6d4').replace(/[^0-9a-fA-F]/g, ''),
            avatar: await fetchAvatarBase64(),
        };

        const svg = buildSvg(opts);

        return new Response(svg, {
            headers: {
                'Content-Type': 'image/svg+xml; charset=utf-8',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                'Access-Control-Allow-Origin': '*',
            },
        });
    },
};
