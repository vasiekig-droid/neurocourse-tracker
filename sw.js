const CACHE_NAME = "neurocourse-tracker-v41";
const ASSETS = ["./", "./index.html", "./manifest.json", "./sw.js"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => { e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
