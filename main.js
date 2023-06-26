function updateResult () {
    event.preventDefault ();
    validate ()
  }

  var message=""

  function validate () {
    letOrtInput = document.getElementById("ort").value;

    if (ortInput.length <6)
    message = "minimum 6 zahlen hinschrieben!!!!!!"

    document.getElementById("error-message-container").innerHTML = 
    message

    else {
        document.getElementById("error-message-container").innerHTML = "richtig!";
      }

    
  }


