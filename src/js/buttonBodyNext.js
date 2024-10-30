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
    arrowButton.style.transform === "rotate(230deg)" ? arrowButton.style.transform = "rotate(45deg)" : arrowButton.style.transform = "rotate(230deg)";
    bodyInfoText.style.height === 'fit-content' ? bodyInfoText.style.height = '90px' : bodyInfoText.style.height = 'fit-content';
    console.log('Клик')
  }

});
