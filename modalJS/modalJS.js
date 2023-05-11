/* MODAL  */
const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelector(".bground");
const modalBtnClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const firstName = document.querySelector("#first");
const btnCloseEnd = document.querySelectorAll(".btn-close");

let btnSubmitValidationForm = document.querySelector("#button");
let inputFirst = document.querySelector("#first");

/**
 * launch modal form
 */
function launchModal() {
    modalbg.style.display = "block";
  
    const myBody = document.querySelector('body');
    myBody.classList.add('isModalOpen');
}

/**
 * closing modal form
 */
function closeModal() {
    modalbg.style.display = "none";
  
    const openForm = document.querySelector('#openForm');
    openForm.classList.remove('hidden');
  
    const closeForm = document.querySelector('#closeForm');
    closeForm.classList.remove('active');
  
    const myBody = document.querySelector('body');
    myBody.classList.remove('isModalOpen');
}

/**
 * function to reset form
 */
function resetMyForm () {
    inputFirst.value = '';   
}

/**
 * function to validate lastname and firstname
 * @param {object} inputName 
 * @param {string} inputId 
 * @returns {boolean} isInputValid retourne si l'input est rempli
 */
function checkInputsValidationName (inputName, inputId) {
    const error = document.querySelector('#' + inputId );
    let inputFirst = firstName.value;
    let isInputValid = false;
  
    if (inputName.value === '' || inputName.value.trim().length < 2) {
      error.innerHTML = 'Merci de remplir ce champ.';
      isInputValid = false;
    } else {
      error.innerHTML = '';
      isInputValid = true;
    }
  
    //console.log('le champ est : ' + isInputValid)
    //return isInputValid;
    //console.log(inputName.value);
    return {
      'isInputValid': isInputValid,
      'inputFirst': inputFirst
    }
  }

// EVENTS
// creation of the button variable
btnSubmitValidationForm.addEventListener('click', (event) => {
    event.preventDefault();
  
    const error = document.querySelector('#btnError');
    //console.log('le formulaire est bon.');
  
    const isFirstNameIsValid = checkInputsValidationName(firstName, 'firstNameError');
    console.log(isFirstNameIsValid);
    
    if(isFirstNameIsValid.isInputValid) {
      
      const openForm = document.querySelector('#openForm');
      openForm.classList.add('hidden');
  
      const closeForm = document.querySelector("#closeForm");
      closeForm.classList.add('active');
  
      resetMyForm();
      
      console.log('Le formulaire est bon');
      error.innerHTML = '';
    } else {
      error.innerHTML = 'Merci de remplir correctement le formulaire.'
      console.log('le formulaire n\'est pas bon');
    }
})
  
// creation of the firstname variable
inputFirst.addEventListener('input', (event) => {
    event.preventDefault();
  
    //checkInputFirstName();
    checkInputsValidationName(firstName, 'firstNameError');
  })

// TO OPEN OR CLOSE THE FORM
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// closing modal event
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));
btnCloseEnd.forEach((btn) => btn.addEventListener("click", closeModal));




/* FENETRE POPUP SUPPRESSION */
// https://waytolearnx.com/2019/10/afficher-un-message-de-confirmation-avant-suppression-en-javascript.html
function confirmer(){
  var res = confirm("Êtes-vous sûr de vouloir supprimer?");
  if(res){
      // Mettez ici la logique de suppression
  }
}

function handleDelete(id) {
    const result = window.confirm(`Voulez-vous vraiment supprimer la ligne ?`);
    if(result) {
      const allTodos = todos.filter(todo => todo.id !== id);
      setTotos(allTodos);
    }
}