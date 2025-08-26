 const sections = [
     "header", "hero", "rollball", "about",
     "news", "gallery", "officer", "contact", "footer"
 ];

 const initSwiper = () => {
     new Swiper('.mySwiper', {
         loop: true,
         slidesPerView: 1,
         spaceBetween: 10,
         breakpoints: {
             640: {
                 slidesPerView: 2
             },
             768: {
                 slidesPerView: 3
             },
             1024: {
                 slidesPerView: 4
             },
         },
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },
         pagination: {
             el: '.swiper-pagination',
             clickable: true,
         },
         autoplay: {
             delay: 3000,
             disableOnInteraction: false,
         }
     });
 };

 const loadSections = async() => {
     for (const section of sections) {
         const container = document.getElementById(`${section}-container`);
         if (!container) continue;

         try {
             const res = await fetch(`sections/${section}.html`);
             if (!res.ok) throw new Error(`HTTP error ${res.status}`);
             const html = await res.text();
             container.innerHTML = html;

             if (section === "hero") initHeroCarousel();
             if (section === "gallery") initSwiper();
             if (section === "header" && typeof initNavbarScroll === "function") initNavbarScroll();
             if (section === "home" && typeof initHomeCarousel === "function") initHomeCarousel();

         } catch (err) {
             console.error(`Failed to load ${section}.html:`, err);
         }
     }
 };

 loadSections();