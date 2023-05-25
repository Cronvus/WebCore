import {buttonBurger, opacityMenu, sideBar} from "./variables"


buttonBurger.addEventListener("click", function(evt){
  evt.preventDefault();
  sideBar.style.display = "block"
  sideBar.classList.remove('sidebar-hide');
  sideBar.classList.add('sidebar-show');
  sideBar.style.position = 'fixed';
  opacityMenu.style.display = 'block';
  opacityMenu.style.opacity = '0.9';
});



