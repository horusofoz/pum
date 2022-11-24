const pumCache = "pum-cache";
const assets = [
  "./",
  "./index.html",
  "./css/reset.css",
  "./css/styles.css",
  "./js/main.js",
  "./js/pum.js",
  "./images/help.svg",
  "./images/oracle.svg",
  "./images/pum_how_to_dark.png",
  "./images/pum_how_to.png",
  "./images/roll.svg",
  "./images/scene.svg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil((async () => {
    const cache = await caches.open(pumCache);
    await cache.addAll(assets);
  })());

});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});

