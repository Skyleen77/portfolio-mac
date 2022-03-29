import { draggable } from "../draggable.js";

const Browser = () => {
  const navigateur = document.querySelector('.navigateur');
  const terminal = document.querySelector('.terminal');
  const navigateurIcon = document.querySelector('.li-google');

  // draggable
  if (window.innerWidth > 880) {
    draggable(navigateur, ".navigateur-header");
  }

  function toIndexTop() {
    const zIndex = parseInt(window.getComputedStyle(terminal)['zIndex']);
    const navZIndex = parseInt(window.getComputedStyle(navigateur)['zIndex']);
    if(zIndex >= navZIndex) {
      const newZIndex = zIndex + 1;
      navigateur.style.zIndex = `${newZIndex + 1}`;
    }
  }

  navigateur.addEventListener('click', () => {
    toIndexTop();
  });

  navigateur.querySelector(".close").addEventListener("click", function (e) {
    navigateur.classList.remove('open');
    navigateurIcon.classList.remove('li-active');
  });

  navigateur.querySelector(".minimize").addEventListener("click", function (e) {
    navigateur.classList.remove('open');
  });

  navigateur.querySelector(".maximize").addEventListener("click", function (e) {
    if(navigateur.classList.contains("full-screen")) {
      navigateur.classList.remove("full-screen");
    } else {
      navigateur.classList.add("full-screen");
    }
  });

  navigateurIcon.addEventListener("click", function (e) {
    navigateur.classList.add('open');
    navigateurIcon.classList.add('li-active');
    toIndexTop();
  });
}

export default Browser;