document.addEventListener('DOMContentLoaded', () => {
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;

        const installButton = document.getElementById('installPWA');
        installButton.style.display = 'block';

        installButton.addEventListener('click', () => {
            deferredPrompt.prompt();

            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Приложение установлено');
                } else {
                    console.log('Пользователь отклонил установку');
                }
                deferredPrompt = null;
            });
        });
    });

    window.addEventListener('appinstalled', () => {
        console.log('Приложение установлено');
        const installButton = document.getElementById('installPWA');
        installButton.style.display = 'none';
    });
});

