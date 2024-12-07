let currentIndex = 0;
const carouselContent = document.querySelector('.carousel-content');
const images = carouselContent.children;

function updateCarousel() {
    const width = images[0].clientWidth;
    carouselContent.style.transform = `translateX(-${currentIndex * width}px)`;
}

function nextImageSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function previousImageSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Avança automaticamente a cada 3 segundos
setInterval(nextImageSlide, 3000);
