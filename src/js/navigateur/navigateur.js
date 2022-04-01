import { draggable } from "../draggable.js";
import DashboardRender from "./dashboardRender.js";

const Browser = () => {
  let navigateur = document.querySelector('.navigateur');
  let terminal = document.querySelector('.terminal');
  let navigateurIcon = document.querySelector('.li-google');
  let tabs = document.querySelectorAll('.tab');
  let reloadBtn = document.querySelector('[data-reload]');
  let closeBtns = document.querySelectorAll('.tab .close-btn');
  let tabContainer = document.querySelector('.tabs-container');
  let addTabBtn = document.querySelector('.new-page');
  let tabsBody = document.querySelectorAll('.navigateur-body');
  const countTab = tabs.length + 1;

  tabs[0].classList.add('active');
  targetTab(tabs[0]);

  tabsMove(tabs);
  closeTab(closeBtns);

  events();

  addingTab();

  function closeTab(closeBtns) {
    closeBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', () => { 
        setTimeout(() => {
          displayPopup(tabsBody, 'Ne fermez pas mes onglets ☹');
        }, 100);
      });
    });
  }

  function removeActive(params) {
    params.forEach(param => {
      if(param.classList.contains('active')) {
        param.classList.remove('active');
      }
    });
  }

  function addTab(theTabs, theTabsBody, theTabContainer, theNavigateur) {
    removeActive(theTabs);
    removeActive(theTabsBody);

    theTabContainer.innerHTML += `
      <div class="tab active" data-target="#tab${countTab}">
        <i class="fa fa-home"></i>
        <span>Dashboard</span>
        <div class="close-btn">
          <i class="fas fa-times"></i>
        </div>
      </div>
    `;

    theNavigateur.innerHTML += `
      <div class="navigateur-body int active" id="tab${countTab}">
        <iframe frameborder="0" style="height: 100%; width: 100%;"></iframe>
      </div>
    `;

    const newTabBody = document.querySelector(`#tab${countTab}`);
    const newTabIframe = newTabBody.querySelector('iframe');
    newTabIframe.srcdoc = DashboardRender();
  }

  function targetTab(tab) {
    const target = document.querySelector(tab.dataset.target);
    const targets = document.querySelectorAll('.navigateur-body');

    if(target) {
      removeActive(targets);
      
      target.classList.add('active');
    }
  }

  function tabsMove(tabs) {
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
  }

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

  function events() {
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

  function resetVar() {
    tabs = document.querySelectorAll('.tab');
    tabsBody = document.querySelectorAll('.navigateur-body');
    tabContainer = document.querySelector('.tabs-container');
    navigateur = document.querySelector('.navigateur');
    closeBtns = document.querySelectorAll('.tab .close-btn');
    addTabBtn = document.querySelector('.new-page');
    navigateurIcon = document.querySelector('.li-google');
    reloadBtn = document.querySelector('[data-reload]');
    terminal = document.querySelector('.terminal');
  }

  function displayPopup(tabsBody, displayContent) {
    tabsBody.forEach(tabBody => {
      if(tabBody.classList.contains('active')) {
        if(!tabBody.querySelector('.popup-add-page')) {
          tabBody.innerHTML += `
            <div class="popup-add-page">
              <div class="popup-header">
                <p>Alerte</p>
              </div>
              <div class="close-popup">
                <i class="fas fa-times"></i>
              </div>
              <div class="popup-body">
                <p>${displayContent}</p>
              </div>
            </div>
          `;

          const popupAddPage = tabBody.querySelector('.popup-add-page');
          const closePopup = popupAddPage.querySelector('.close-popup');

          closePopup.addEventListener('click', () => {
            popupAddPage.remove();
          });
        }
      }
    });
  }

  function addingTab() {
    addTabBtn.addEventListener('click', () => {
      addTab(tabs, tabsBody, tabContainer, navigateur);
      resetVar();

      addTabBtn.addEventListener('click', () => {
        displayPopup(tabsBody, 'Vous ne pouvez pas ouvrir de nouvelle onglets !');
      });

      tabsMove(tabs);
      closeTab(closeBtns);
      events();
    });
  }
}

export default Browser;