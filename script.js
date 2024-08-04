document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('birthdayButton');
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    const crushButton = document.querySelector('.crushbtn');
    let currentIndex = 0;

    function animateButton() {
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 2000);
    }

    if (window.innerWidth <= 768) {
        setInterval(animateButton, 3000);
    }

    // Скрыть загрузочный экран и показать основной контент
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'flex';
    }, 5000);

    // Запуск анимации для crushButton
    crushButton.classList.add('animate-start');

    // Функции для карусели
    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Обработчики событий для кнопок карусели
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Автоматическая смена слайдов каждые 5 секунд
    setInterval(nextSlide, 5000);
});
