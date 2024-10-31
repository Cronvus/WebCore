import {
  bodyInfoText,
  arrowButton,
  bodyNext,
  arrowButtonLabel

} from './variables'

bodyNext.addEventListener('click', function(evt){
  evt.preventDefault();
  if(document.documentElement.offsetWidth < 662) {
    arrowButtonLabel.textContent = arrowButtonLabel.textContent === "Читать далее" ? "Скрыть" : 'Читать далее';
    arrowButtonLabel.style.color = 'black';
    for(var i =0; i<arrowButton.length; i++) {
      arrowButton[i].style.transform === "rotate(230deg)" ? arrowButton[i].style.transform = "rotate(45deg)" : arrowButton[i].style.transform = "rotate(230deg)";
    }
    bodyInfoText.style.height === 'auto' ? bodyInfoText.style.height = '90px' : bodyInfoText.style.height = 'auto';
  } else if(document.documentElement.offsetWidth < 1440) {
    arrowButtonLabel.textContent = arrowButtonLabel.textContent === "Читать далее" ? "Скрыть" : 'Читать далее';
    arrowButtonLabel.style.color = 'black';
    for(var i =0; i<arrowButton.length; i++) {
      arrowButton[i].style.transform === "rotate(230deg)" ? arrowButton[i].style.transform = "rotate(45deg)" : arrowButton[i].style.transform = "rotate(230deg)";
    }
    bodyInfoText.style.height === 'auto' ? bodyInfoText.style.height = '160px' : bodyInfoText.style.height = 'auto';
  } else{
    arrowButtonLabel.style.color = '#666';
  }

});
