/* ============================================================
   NETSIGHT·PRO BLOG — Service Worker
   策略：网络优先，失败 fallback 缓存（stale-while-revalidate 变体）
   - 只处理同源 GET 请求
   - 版本号常量 CACHE_VERSION：发布新版本时递增即可触发缓存更新
   ============================================================ */

"use strict";

var CACHE_VERSION = "nsp-blog-v1";
var CACHE_NAME = "nsp-blog-" + CACHE_VERSION;

/* 核心资源：首页 / 文章页 / PWA manifest（相对路径，适配任意子路径部署） */
var CORE_ASSETS = [
  "./index.html",
  "./post.html",
  "./manifest.json"
];

/* 安装：预缓存核心资源 */
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

/* 激活：清理旧版本缓存 */
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) {
          return key.indexOf("nsp-blog-") === 0 && key !== CACHE_NAME;
        }).map(function (key) {
          return caches.delete(key);
        })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* 请求拦截：网络优先 -> 失败 fallback 缓存 */
self.addEventListener("fetch", function (event) {
  var req = event.request;

  /* 只处理同源 GET 请求 */
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  /* 核心页面请求走网络优先策略 */
  var isCore = CORE_ASSETS.some(function (asset) {
    var assetUrl = new URL(asset, self.location.href);
    return url.pathname === assetUrl.pathname;
  });

  event.respondWith(
    fetch(req).then(function (response) {
      /* 仅缓存有效响应（同源、200、非 opaque） */
      if (response && response.status === 200 && response.type === "basic") {
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(req, copy);
        });
      }
      return response;
    }).catch(function () {
      /* 网络失败：回退缓存 */
      return caches.match(req).then(function (cached) {
        if (cached) return cached;
        /* 核心资源再兜底：尝试缓存中的 index.html，保证站内跳转可用 */
        if (isCore) {
          return caches.match("./index.html");
        }
        return new Response("OFFLINE", { status: 503, statusText: "Offline" });
      });
    })
  );
});
