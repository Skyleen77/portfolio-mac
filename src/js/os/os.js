const MacOS = () => {

  const time = document.querySelector('.menu-time');
  const icons = document.querySelectorAll(".ico");
  const options = {weekday: "short", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit"};
  // let length = icons.length;

  let date = new Date();
  date = date.toLocaleDateString('fr-FR', options);
  date = date.replace(date.charAt(0), date.charAt(0).toUpperCase());
  
  time.textContent = date;

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
  };
}

export default MacOS;