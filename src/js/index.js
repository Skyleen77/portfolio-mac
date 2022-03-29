import Terminal from "./terminal/terminal.js";
import MacOS from "./os/os.js";

MacOS();

fetch('./src/commandes/commands.json')
  .then(response => response.json())
  .then(data => {
    Terminal(data);
  })
  .catch(error => {
    console.log(error)
  });
