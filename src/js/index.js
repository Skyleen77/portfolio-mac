import Terminal from "./terminal/terminal.js";
import MacOS from "./os/os.js";
import Browser from "./navigateur/navigateur.js";
import DinogameRender from "./navigateur/dinogame/dinogameRender.js";
import ContactRender from "./contact/contactRender.js";
import Contact from "./contact/contact.js";

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});


MacOS();

Browser();
DinogameRender();

ContactRender();
Contact();

fetch('./src/commandes/commands.json')
  .then(response => response.json())
  .then(data => {
    Terminal(data);
  })
  .catch(error => {
    console.log(error)
  });
