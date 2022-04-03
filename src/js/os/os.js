const MacOS = () => {

  const time = document.querySelector('.menu-time');
  const icons = document.querySelectorAll(".ico");
  const extendBtn = document.querySelector('[data-extend]');

  extendBtn.innerHTML = '<i class="fas fa-expand"></i>';

  function getFullscreenElement() {
    return document.fullscreenElement
        || document.webkitFullscreenElement
        || document.mozFullscreenElement
        || document.msFullscreenElement;
  }

  extendBtn.addEventListener('click', () => {
    if(getFullscreenElement()) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(console.log);
    }
  });

  document.addEventListener('fullscreenchange', () => {
    if(getFullscreenElement()) {
      extendBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
      extendBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
  });

  setInterval(() => {
    const options = {weekday: "short", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"};
    let date = new Date();
    date = date.toLocaleDateString('fr-FR', options);
    date = date.replace(date.charAt(0), date.charAt(0).toUpperCase());
    
    time.textContent = date;
  }, 1000);  

  const focus = (elem, index) => {
    const previous = index - 1;
    const previous2 = index - 2;
    const next = index + 1;
    const next2 = index + 2;

    if (previous == -1) {
      elem.style.transform = "scale(1.5)  translateY(-10px)";
    } else if (next == icons.length) {
      elem.style.transform = "scale(1.5)  translateY(-10px)";
    } else {
      elem.style.transform = "scale(1.5)  translateY(-10px)";

      if(icons[previous] !== undefined) {
        icons[previous].style.transform = "scale(1.2) translateY(-6px)";
      }
      if(icons[previous2] !== undefined) {
        icons[previous2].style.transform = "scale(1.1)";
      }
      if(icons[next] !== undefined) {
        icons[next].style.transform = "scale(1.2) translateY(-6px)";
      }
      if(icons[next2] !== undefined) {
        icons[next2].style.transform = "scale(1.1)";
      }
    }
  }

  const focusItems = () => {
    icons.forEach((item, index) => {
      item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
      });
      item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
          item.style.transform = "scale(1)  translateY(0px)";
        });
      });
    });
  }

  if (window.innerWidth > 880) {
    focusItems();
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880) {
      focusItems();
    }
  });
}

export default MacOS;