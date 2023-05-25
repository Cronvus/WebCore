let slider;
let init = false;

import { partnerLaptop, partnerPC } from "./variables";


function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      slider = new Swiper('.main-swiper',{
        slidesPerView: "auto",
        spaceBetween: 0,
        
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        enabled: true,
      });
      

    }
  } else if (init) {
    slider.destroy();
    init = false;
  }
};
swiperCard();
window.addEventListener("resize", swiperCard);




