// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true, // Infinite loop
  slidesPerView: 1, // Default: 1 slide per view
  spaceBetween: 10, // Space between slides (in px)

  // Responsive breakpoints (optional)
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
