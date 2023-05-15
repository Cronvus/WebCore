let slider;
let init = false;
let slideButton = document.querySelector(".main-swiper__slide-button")
let buttonHideOpen = document.querySelector(".main__next-button");
let partnerLaptop = document.querySelectorAll(".hide768px");
let partnerPC = document.querySelectorAll(".hide1120px");
let arrowRotate = document.getElementById("arrow-button");
let textButton = document.querySelector('.next-button_text');


function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      slider = new Swiper('.main-swiper',{
        slidesPerView: "auto",
        spaceBetween: 0,
        centeredSlides: true,
        centeredSlidesBounds: true,
        
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        enabled: true,
      });
      for (var i = 0; i < partnerLaptop.length; i++){
        partnerLaptop[i].classList.remove('hide');
       };
     for (var i = 0; i < partnerPC.length; i++){
       partnerPC[i].classList.remove('hide');
     };

    }
  } else if (init) {
    slider.destroy();
    init = false;
    for (var i = 0; i < partnerLaptop.length; i++){
      partnerLaptop[i].classList.add('hide');
     };
    for (var i = 0; i < partnerPC.length; i++){
     partnerPC[i].classList.add('hide');
   };
  };
};
swiperCard();
window.addEventListener("resize", swiperCard);


buttonHideOpen.addEventListener("click", function(evt){
  evt.preventDefault();
  if(document.documentElement.offsetWidth < 1120) {
    for (var i = 0; i < partnerLaptop.length; i++){
     partnerLaptop[i].classList.toggle('hide');
    };
  };
  for (var i = 0; i < partnerPC.length; i++){
    partnerPC[i].classList.toggle('hide');
  };
  textButton.textContent = textButton.textContent === "Показать все" ? "Скрыть" : 'Показать все';
  arrowRotate.style.transform === "rotate(180deg)" ? arrowRotate.style.transform = "rotate(0deg)" : arrowRotate.style.transform = "rotate(180deg)";
});



