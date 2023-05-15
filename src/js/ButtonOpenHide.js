let buttonHideOpen = document.querySelector(".main__next-button");
let partnerLaptop = document.querySelectorAll(".hide768px");
let partnerPC = document.querySelectorAll(".hide1120px");
let arrowRotate = document.getElementById("arrow-button");
let textButton = document.querySelector('.next-button_text')



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