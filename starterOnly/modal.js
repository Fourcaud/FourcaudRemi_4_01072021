function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// ToDo : Fermer la modale #1
const closeBtn = document.querySelectorAll(".close");

//modal validation Ajouter confirmation quand envoie réussi #4
const modalV = document.querySelector(".modalValidate");
const modalVbg = document.querySelector(".bground2");
const closeBtnV = document.querySelectorAll(".closeV");
const closeBtn2 = document.querySelectorAll(".close2");

// Ajouter validation ou messages d'erreur #3
const ErrorLocation = document.getElementById("ErrorLocation");
const ErrorRules = document.getElementById("ErrorRules");

// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 /Ajouter confirmation quand envoie réussi #4
let x = new Boolean("false");
let y = new Boolean("false");

// submit
document.getElementById("reserve-form").addEventListener("submit", validate);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal validation event
closeBtnV.forEach((btn) => btn.addEventListener("click", closeModalV));
closeBtn2.forEach((btn) => btn.addEventListener("click", closeModalV));

// F launch modal form (handler)
function launchModal() {
  modalbg.style.display = "block";
}

// F close modal form (handler)
function closeModal() {
  modalbg.style.display = "none";
}

//close modal form and open validate
function validateModal() {
  modalbg.style.display = "none";
  modalV.style.display = "flex";
  modalVbg.style.display = "block";
}

// F close modal Validation form (handler)
function closeModalV() {
  modalV.style.display = "none";
  modalVbg.style.display = "none";
}

// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 / Test localisation
function validateLocation() {
  const input = document.querySelectorAll("[name='location']");
  for (var i = 0; i < input.length; i++) {
    const validityState = input[i].checked;
    if (validityState == false) {
      ErrorLocation.style.display = "block";
      x = false;
    } else {
      ErrorLocation.style.display = "none";
      x = true;
      break;
    }
  }
}
// Implémenter entrées du formulaire #2 /Ajouter validation ou messages d'erreur #3 / Test conditions d'utilisation
function validateRules() {
  const input = document.getElementById("checkbox1");
  const validityState = input.checked;
  if (validityState == false) {
    ErrorRules.style.display = "block";
    y = false;
  } else {
    ErrorRules.style.display = "none";
    y = true;
  }
}

// F principal du formulaire on test si location et rules son true avant de fermer le modal , les autres inputs sont testé avant via required
function validate(ev) {
  ev.preventDefault();
  validateLocation();
  validateRules();
  if (x && y === true) {
    validateModal();
  }
}
