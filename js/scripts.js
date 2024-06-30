document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    let currentIndex = 0;
    const totalItems = carouselItems.length;
    const itemWidth = carouselContainer.clientWidth;
    const intervalTime = 10000; // Intervalo de cambio automático en milisegundos (30 segundos)
    let slideInterval;

    // Ajustar el ancho del carrusel
    carouselSlide.style.width = `${totalItems * itemWidth}px`;

    // Ajustar el ancho de cada item del carrusel
    carouselItems.forEach(item => {
        item.style.width = `${itemWidth}px`;
    });

    // Función para actualizar la posición del carrusel
    const updateCarousel = () => {
        carouselSlide.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    };

    // Función para mostrar el siguiente slide
    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    };

    // Función para mostrar el slide anterior
    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    };

    // Función para iniciar el intervalo de cambio automático
    const startSlideInterval = () => {
        slideInterval = setInterval(() => {
            showNextSlide();
        }, intervalTime);
    };

    // Función para detener el intervalo de cambio automático
    const stopSlideInterval = () => {
        clearInterval(slideInterval);
    };

    // Agregar event listeners a los botones de navegación
    nextButton.addEventListener('click', () => {
        stopSlideInterval();
        showNextSlide();
        startSlideInterval();
    });

    prevButton.addEventListener('click', () => {
        stopSlideInterval();
        showPrevSlide();
        startSlideInterval();
    });

    // Iniciar el intervalo de cambio automático al cargar la página
    startSlideInterval();

    // Detener el intervalo cuando el usuario interactúa con el carrusel
    carouselContainer.addEventListener('mouseenter', stopSlideInterval);
    carouselContainer.addEventListener('mouseleave', startSlideInterval);
});