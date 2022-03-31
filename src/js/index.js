import Terminal from "./terminal/terminal.js";
import MacOS from "./os/os.js";
import Browser from "./navigateur/navigateur.js";
import DinogameRender from "./navigateur/dinogame/dinogameRender.js";

MacOS();

Browser();
DinogameRender();

fetch('./src/commandes/commands.json')
  .then(response => response.json())
  .then(data => {
    Terminal(data);
  })
  .catch(error => {
    console.log(error)
  });
