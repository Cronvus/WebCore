import {buttonCross, opacityMenu, sideBar, modalCall, modalFeedback, opacityModal, callCross, feedbackCross} from './variables';

buttonCross.addEventListener("click", clickCross);

callCross.addEventListener("click", clickCross);

feedbackCross.addEventListener("click", clickCross);


function clickCross(evt){
  evt.preventDefault();
  sideBar.classList.add('sidebar-hide');
  sideBar.classList.remove('sidebar-show');
  sideBar.style.position = 'absolute';
  modalCall.classList.add('modal-hide');
  modalCall.classList.remove('modal-show');
  modalCall.style.position = 'absolute';
  modalFeedback.classList.add('modal-hide');
  modalFeedback.classList.remove('modal-show');
  modalFeedback.style.position = 'absolute';
  opacityModal.style.display = 'none';
  opacityMenu.style.display = 'none';
  modalCall.style.display = 'none';
  modalFeedback.style.display = 'none';
  sideBar.style.display = 'none';

}