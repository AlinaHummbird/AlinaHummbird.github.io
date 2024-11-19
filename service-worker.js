// service-worker.js

// Кэшируем ресурсы при установке Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: устанавливается');
  event.waitUntil(
    caches.open('v1').then((cache) => {
      console.log('Service Worker: кэшируем файлы');
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/style.css', // Если есть файл стилей
        '/script.js', // Если есть файл скриптов
        '/icons/icon-192x192.png', // Замените на свои иконки
        '/icons/icon-512x512.png'
      ]);
    })
  );
});

// Обработчик запросов для возврата кэшированных ресурсов
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: перехвачен запрос', event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Обновление Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: активирован');
});
