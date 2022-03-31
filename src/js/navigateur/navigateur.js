import { draggable } from "../draggable.js";

const Browser = () => {
  const navigateur = document.querySelector('.navigateur');
  const terminal = document.querySelector('.terminal');
  const navigateurIcon = document.querySelector('.li-google');
  const tabs =  document.querySelectorAll('.tab');
  const reloadBtn = document.querySelector('[data-reload]');

  function targetTab(tab) {
    const target = document.querySelector(tab.dataset.target);
    const targets = document.querySelectorAll('.navigateur-body');

    targets.forEach(e => {
      e.classList.remove('active');
    });
    
    target.classList.add('active');
  }

  tabs[0].classList.add('active');
  targetTab(tabs[0]);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if(!tab.classList.contains('active')) {
        tabs.forEach(tabTest => {
          if(tabTest.classList.contains('active')) {
            tabTest.classList.remove('active');
          }
        });

        tab.classList.add('active');
        if(tab.dataset.target) {
          targetTab(tab);
        }
      }
    });
  });

  // draggable
  if (window.innerWidth > 880) {
    draggable(navigateur, ".navigateur-header");
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880) {
      draggable(navigateur, ".navigateur-header");
    }
  });

  function toIndexTop() {
    const zIndex = parseInt(window.getComputedStyle(terminal)['zIndex']);
    const navZIndex = parseInt(window.getComputedStyle(navigateur)['zIndex']);
    if(zIndex >= navZIndex) {
      const newZIndex = zIndex + 1;
      navigateur.style.zIndex = `${newZIndex}`;
    }
  }

  function resetPage() {
    const targets = document.querySelectorAll('.navigateur-body');
    targets.forEach(target => {
      if(target.classList.contains('active')) {
        if(target.classList.contains('int')) {
          target.querySelector('iframe').contentWindow.location.reload(true);
        } else {
          target.querySelector('iframe').src = target.querySelector('iframe').src;
        }
      }
    });
  }

  navigateur.addEventListener('click', () => {
    toIndexTop();
  });

  navigateur.querySelector(".close").addEventListener("click", function (e) {
    navigateur.classList.remove('open');
    navigateurIcon.classList.remove('li-active');
    resetPage();
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

  reloadBtn.addEventListener('click', () => {
    resetPage();
  });
}

export default Browser;