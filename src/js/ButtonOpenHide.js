
import{partnerLaptop, partnerPC, buttonHideOpen, arrowRotate, textButton} from "./variables";


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