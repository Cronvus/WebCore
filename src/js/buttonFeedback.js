import {buttonFeedback, modalFeedback, opacityModal, headerFeedback} from './variables'

buttonFeedback.addEventListener("click", clickFeedback);

headerFeedback.addEventListener("click", clickFeedback);

function clickFeedback(evt){
  evt.preventDefault();
  modalFeedback.classList.remove('modal-hide');
  modalFeedback.classList.add('modal-show');
  modalFeedback.style.position = 'fixed';
  opacityModal.style.display = 'block';
  opacityModal.style.opacity = '0.9';
};