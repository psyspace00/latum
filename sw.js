// MediSmart - Copyright (c) 2026 Maximilian Riehn. Alle Rechte vorbehalten.
// Geistiges Eigentum von Maximilian Riehn. Kopieren, Veraendern und Weitergeben nur mit schriftlicher Genehmigung (siehe LICENSE).

// Offline-Cache: Erst aus dem Netz laden (damit Updates ankommen), sonst aus dem Cache.
// Bei Änderungen an der Dateiliste die Versionsnummer erhöhen.
const CACHE = "medismart-v7";
const DATEIEN = [
  "./", "./index.html", "./styles.css", "./figuren.css", "./schutz.js", "./app.js", "./data.js", "./figures.js", "./modelle.js",
  "./pflege.js", "./quiz.js", "./diagnosen.js", "./vi_anatomie.js", "./vi_pflege.js", "./vi_quiz.js", "./sprache.js", "./version.js", "./anatomie3d.js", "./vendor/three.module.min.js", "./manifest.json",
  "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(DATEIEN); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (r) {
      const kopie = r.clone();
      caches.open(CACHE).then(function (c) { c.put(e.request, kopie); });
      return r;
    }).catch(function () { return caches.match(e.request); })
  );
});
