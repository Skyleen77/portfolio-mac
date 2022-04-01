import Terminal from "./terminal/terminal.js";
import MacOS from "./os/os.js";
import Browser from "./navigateur/navigateur.js";
import DinogameRender from "./navigateur/dinogame/dinogameRender.js";
import ContactRender from "./contact/contactRender.js";
import Contact from "./contact/contact.js"

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
