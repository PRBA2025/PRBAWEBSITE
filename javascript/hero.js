function initHeroCarousel() {
    const images = [
        "./images/gallery/images1.jpg",
        "./images/gallery/images2.jpg",
        "./images/gallery/images3.jpg",
        "./images/gallery/images4.jpg"
    ];

    const carousel = document.querySelector('.carousel');
    const dotsContainer = document.querySelector('.dots');

    if (!carousel) return;

    let index = 0;
    let interval;

    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${i + 1}`;
        carousel.appendChild(img);

        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dots span');

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function goToSlide(i) {
        index = i;
        updateCarousel();
        resetInterval();
    }

    function startInterval() {
        interval = setInterval(nextSlide, 3000);
    }

    function resetInterval() {
        clearInterval(interval);
        startInterval();
    }

    updateCarousel();
    startInterval();
}