import { config } from '../../../config.js';

emailjs.init(config.user);

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  const submitBtn = document.querySelector("#submitBtn");
  const alertMessage = document.querySelector("#alertMessage");
  const submitLoader = document.querySelector("#submitLoader");
  const submitValid = document.querySelector("#submitValid");

  submitValid.style.display = "none";

  if(name.length > 0 && email.length > 0 && message.length > 0) {
    submitLoader.style.display = "inline-block";

    const params = {
      subject: "Nouveau message depuis Portfolio",
      name: name,
      email: email,
      message: message
    }
  
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#message").value = '';
  
    emailjs.send(config.service, config.template, params)
      .then(function(res) {
        submitLoader.style.display = "none";
        submitValid.style.display = "inline-block";
        alertMessage.style.color = "green";
        submitBtn.classList.add("valid");
        alertMessage.textContent = "Votre message a bien été envoyé, vous recevrez une réponse dans les plus brefs délais.";
        
        setTimeout(() => {
          submitBtn.classList.remove("valid");
          submitValid.style.display = "none";
          alertMessage.textContent = "";
        }, 15000)
      })
      .catch(function(err) {
        submitLoader.style.display = "none";
        alertMessage.style.color = "red";
        alertMessage.textContent = "Erreur : " + err;
      });
  } else {
    alertMessage.style.color = "red";
    alertMessage.textContent = "Tous les champs doivent être remplis !";
  }

});