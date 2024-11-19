let deferredPrompt;

// Перехват события 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
    // Остановить автоматическое отображение диалога установки
    e.preventDefault();
    // Сохранить событие для дальнейшего использования
    deferredPrompt = e;

    // Показать кнопку для установки
    const installButton = document.getElementById('installPWA');
    installButton.style.display = 'block';

    // При клике на кнопку показываем диалог установки
    installButton.addEventListener('click', () => {
        // Показываем диалог установки
        deferredPrompt.prompt();

        // Обрабатываем выбор пользователя
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Приложение установлено');
            } else {
                console.log('Пользователь отклонил установку');
            }
            // Сбросить deferredPrompt
            deferredPrompt = null;
        });
    });
});

// Дополнительно: скрыть кнопку, если приложение уже установлено
window.addEventListener('appinstalled', () => {
    console.log('Приложение установлено');
    const installButton = document.getElementById('installPWA');
    installButton.style.display = 'none';
});
