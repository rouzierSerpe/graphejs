//const { DoughnutController } = require("chart.js");

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
let rowsIndex,tableau = document.getElementById('tableau');

function selectedRow() {
  // let rIndex,table = document.getElementById('table');
  for(let i = 1; i < tableau.rows.length; i++) {
    tableau.rows[i].onclick = function() {
      // get the selected row index
      rowsIndex = this.rowIndex;
      console.log(rowsIndex);

      // get the data from the selected row to put it in the input text
      // document.getElementById('fname').value = this.cells[0].innerHTML;
      // document.getElementById('lname').value = this.cells[1].innerHTML;
      // document.getElementById('age').value = this.cells[2].innerHTML;
    };
  }
}



function confirmer(){
  var res = confirm("Êtes-vous sûr de vouloir supprimer ?");
  
  if(res){
      // Mettez ici la logique de suppression
      tableau.deleteRow(rowsIndex);
  }
}

function handleDelete(id) {
    const result = window.confirm(`Voulez-vous vraiment supprimer la ligne ?`);
    if(result) {
      const allTodos = todos.filter(todo => todo.id !== id);
      setTotos(allTodos);
    }
}

function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}


// let rowIndex,tableau = document.getElementById('tableau');

// function deleteSelectedRow() {
//   table.deleteRow(rIndex);

//   // clear input text
//   document.getElementById('fname').value = '';
//   document.getElementById('lname').value = '';
//   document.getElementById('age').value = '';
// }


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
// https://www.youtube.com/watch?v=KnKMGCSPj3Y 
///////////////////////////////////////////////////////////////////
let rIndex,table = document.getElementById('table');

// check if empty input
function checkEmptyInput() {
  let isEmpty = false,
      fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      age = document.getElementById('age').value;

  if(fname === '') {
    alert('Le prénom ne peut pas être vide');
    isEmpty = true;
  }
  else if(lname === '') {
    alert('Le nom ne peut pas être vide');
    isEmpty = true;
  }
  else if(age === '') {
    alert("L'âge ne peut pas être vide");
    isEmpty = true;
  } 
  return isEmpty;
}

// add row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the value into row cell's
  if(!checkEmptyInput()) {
    let newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        age = document.getElementById('age').value;

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = age;

    // call the function to set the event to the new row
    selectedRowToInput();
  }
}

// display selected row data into input text
function selectedRowToInput() {
  // let rIndex,table = document.getElementById('table');
  for(let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      // get the selected row index
      rIndex = this.rowIndex;
       console.log(rIndex);

      // get the data from the selected row to put it in the input text
      document.getElementById('fname').value = this.cells[0].innerHTML;
      document.getElementById('lname').value = this.cells[1].innerHTML;
      document.getElementById('age').value = this.cells[2].innerHTML;
    };
  }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
  let fname = document.getElementById('fname').value,
      lname = document.getElementById('lname').value,
      age = document.getElementById('age').value;

  table.rows[rIndex].cells[0].innerHTML = fname;
  table.rows[rIndex].cells[1].innerHTML = lname;
  table.rows[rIndex].cells[2].innerHTML = age;
}

function removeSelectedRow() {
  table.deleteRow(rIndex);

  // clear input text
  document.getElementById('fname').value = '';
  document.getElementById('lname').value = '';
  document.getElementById('age').value = '';
}
