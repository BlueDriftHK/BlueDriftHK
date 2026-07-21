// Service Worker - BlueDriftHK 个人主页 PWA 离线缓存
const CACHE_NAME = 'bluedrift-v1';
const ASSETS = [
    '/',
    '/index.html'
];

// 安装：预缓存核心资源
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
        )
    );
    self.clients.claim();
});

// 拦截请求：网络优先，失败时回退缓存（Stale-While-Revalidate 变体）
self.addEventListener('fetch', (event) => {
    const { request } = event;
    // 只处理 GET 请求
    if (request.method !== 'GET') return;
    // 跳过跨域 API 请求
    if (!request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        fetch(request)
            .then((response) => {
                // 缓存成功的同源响应
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
                }
                return response;
            })
            .catch(() => caches.match(request).then((cached) => cached || caches.match('/index.html')))
    );
});
