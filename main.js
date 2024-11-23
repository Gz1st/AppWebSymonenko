document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-button');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const menu = document.querySelector('.menu');

    // Відкриття меню
    menuButton.addEventListener('click', () => {
        menu.classList.add('active'); // Додає клас для відкриття меню
    });

    // Закрити меню
    closeMenuBtn.addEventListener('click', () => {
        menu.classList.remove('active'); // Видаляє клас для закриття меню
    });
});
