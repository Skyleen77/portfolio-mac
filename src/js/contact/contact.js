const Contact = () => {
  const contact = document.querySelector('.contact-wrapper');
  const navigateur = document.querySelector('.navigateur');
  const terminal = document.querySelector('.terminal');
  const contactIcon = document.querySelector('.li-contact');

  contact.addEventListener('click', () => {
    toIndexTop();
  });

  contactIcon.addEventListener("click", function (e) {
    contact.classList.add('open');
    contactIcon.classList.add('li-active');
    toIndexTop();
  });

  contact.querySelector(".close").addEventListener("click", function (e) {
    contact.classList.remove('open');
    contactIcon.classList.remove('li-active');
  });

  contact.querySelector(".minimize").addEventListener("click", function (e) {
    contact.classList.remove('open');
  });

  contact.querySelector(".maximize").addEventListener("click", function (e) {
    if(contact.classList.contains("full-screen")) {
      contact.classList.remove("full-screen");
    } else {
      contact.classList.add("full-screen");
    }
  });

  function toIndexTop() {
    const zIndex = parseInt(window.getComputedStyle(terminal)['zIndex']);
    const navZIndex = parseInt(window.getComputedStyle(navigateur)['zIndex']);
    const contactZIndex = parseInt(window.getComputedStyle(contact)['zIndex']);

    const compareZIndex = zIndex >= navZIndex ? zIndex : navZIndex;

    if(compareZIndex >= contactZIndex) {
      const newZIndex = compareZIndex + 1;
      contact.style.zIndex = `${newZIndex}`;
    }
  }

}

export default Contact;
