const swiper = new Swiper('.graphics-content_bottom-sliders', {
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.graphics-content_top-right_button-right',
    prevEl: '.graphics-content_top-right_button-left',
  },
});

const newSwiper = new Swiper('.testimonials-content_sliders', {
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.testimonials-content_slide-right_button-right',
    prevEl: '.testimonials-content_slide-right_button-left',
  },
});
