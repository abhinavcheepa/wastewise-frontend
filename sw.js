const CACHE = 'wastewise-v2';
const PRECACHE = [
  './',
  './wastewise-complete.html',
  './scanner.html',
  './index.html',
  './dusbin/index.html',
  './indore1.jpg',
  './indore2.jpg',
  './indore3.jpg',
  './indore4.jpg',
  './indore5.jpg',
  './ai_model/model.json',
  './ai_model/group1-shard1of5.bin',
  './ai_model/group1-shard2of5.bin',
  './ai_model/group1-shard3of5.bin',
  './ai_model/group1-shard4of5.bin',
  './ai_model/group1-shard5of5.bin',
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Caveat:wght@600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const clone = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return resp;
    })).catch(() => caches.match('./wastewise-complete.html'))
  );
});
