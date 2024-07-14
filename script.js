document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('birthdayButton');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    const crushButton = document.querySelector('.crushbtn');

    function viewGreetings() {
        alert("Here are the birthday greetings!");
    }

    function animateButton() {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 2000); // Duration of the animation should match the CSS animation duration
    }

    button.addEventListener('click', viewGreetings);

    if (window.innerWidth <= 768) {
        setInterval(animateButton, 3000); // Interval between animations
    }

    // Скрыть загрузочный экран и показать основной контент
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 5000); // 3 seconds for the loading screen

    // Запуск анимации для crushButton
    crushButton.classList.add('animate-start');
});
