function validateInput() { 
  if (validateOrt() == true ) {
    return validatePLZ();
     
  }

  return false;
}

function validateOrt() {
  let ortInput = document.getElementById("ort").value;

  if (ortInput.length < 6) {
    document.getElementById("error-message-container").innerHTML = "Bitte gib beim Ort mindestens 6 Buchstaben ein!";
    return false;
  }
  /*   else {
      document.getElementById("error-message-container").innerHTML = "richtig!";
  } */

  return true;
}

  /* 
  var message=""

  

  function zwei(){
    let telInput = document.getElementById("tel").value;

    if (telInput.length <5) {
      message = message + " " + "lastName minimum 5"
      document.getElementById("error-message-container").innerHTML = 
      message
    }
  }
 */

