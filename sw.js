const CACHE_NAME = "mindscope-cache-v3";

const urlsToCache = [
  '/mindscope/',
  '/mindscope/index.html',
  '/mindscope/manifest.json',
  '/mindscope/assets/icon-192.png',
  '/mindscope/assets/icon-512.png',
  '/mindscope/assets/icon-192-maskable.png',
  '/mindscope/assets/icon-512-maskable.png'
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});