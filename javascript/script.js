function initNavbarScroll() {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');

  if (menuIcon && navbar) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };
  }

  window.addEventListener("scroll", function () {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
}

function initHomeCarousel() {
  const homeSection = document.querySelector(".home");
  const title = document.getElementById("carousel-title");
  const desc = document.getElementById("carousel-desc");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!homeSection || !title || !desc) return;

  const slides = [
    {
      bg: "images/bg.jpg",
      title: "Building the Future of Rollball in the Philippines",
      desc: "Empowering youth through sports, discipline, and unity."
    },
    {
      bg: "images/about.jpg",
      title: "Join Our National Rollball Movement",
      desc: "Be part of a growing sport that fosters teamwork and leadership."
    },
    {
      bg: "images/bg3.jpg",
      title: "Train. Play. Compete.",
      desc: "Discover your potential and represent your region in rollball tournaments."
    }
  ];

  let currentSlide = 0;
  let intervalId;

  function showSlide(index) {
    const slide = slides[index];
    homeSection.style.backgroundImage = `url('${slide.bg}')`;
    title.textContent = slide.title;
    desc.textContent = slide.desc;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 10000);
  }

  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });
  }

  showSlide(currentSlide);
  startAutoSlide();
}
