new Swiper(".foodSlider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,

        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },

        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#f59e0b',
          darkbg: '#0f172a'
        }
      }
    }
  }
