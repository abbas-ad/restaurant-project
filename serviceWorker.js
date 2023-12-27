self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("my-cache").then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/styles.css",
        "/fonts.css",
        "/footer.css",
        "/navbar.css",
        "/products.css",
        "/sidbar.css",
        "/products.js",
        "/index.js",
        "/products.html",
        "/resevtions.html",
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
