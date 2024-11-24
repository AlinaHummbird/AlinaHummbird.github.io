// script.js

if ('serviceWorker' in navigator) {
  // Регистрация Service Worker
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch((error) => {
        console.log('Ошибка регистрации Service Worker:', error);
      });
  });
} else {
  console.log('Ваш браузер не поддерживает Service Worker');
}
<script src="script.js"></script> <!-- Подключение файла с регистрацией SW -->
</body>
