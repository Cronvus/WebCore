import {buttonCall, modalCall, opacityModal, headerCall} from './variables'

buttonCall.addEventListener("click", clickCall);

headerCall.addEventListener("click", clickCall);

function clickCall(evt){
  evt.preventDefault();
  modalCall.classList.remove('modal-hide');
  modalCall.classList.add('modal-show');
  modalCall.style.position = 'fixed';
  opacityModal.style.display = 'block';
  opacityModal.style.opacity = '0.9';
}