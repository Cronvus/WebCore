import{technicalLaptop, technicalButton, technicalPC, arrowRotateTechnical, textButtonTechnical} from "./variables";


technicalButton.addEventListener("click", function(evt){
  evt.preventDefault();
  if(document.documentElement.offsetWidth < 1120) {
     technicalLaptop.classList.toggle('hide');
  };
  for (var i = 0; i < technicalPC.length; i++){
    technicalPC[i].classList.toggle('hide');
  };
  textButtonTechnical.textContent = textButtonTechnical.textContent === "Показать все" ? "Скрыть" : 'Показать все';
  arrowRotateTechnical.style.transform === "rotate(180deg)" ? arrowRotateTechnical.style.transform = "rotate(0deg)" : arrowRotateTechnical.style.transform = "rotate(180deg)";
});