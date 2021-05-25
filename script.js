function checkScore() {
    let num =  document.getElementById("score").value ;
  if (num > 25) {
      let errorMessage = "Total score can not be more than 25";
      document.getElementById("display").innerText = errorMessage;
      return errorMessage;
    }
    //if it is not a number
    else if (isNaN(num)){
      let error = "Please enter a valid number"
      document.getElementById("display").innerText = error;
        return error ;
    }
    else{
      let result = (num / 25) * 100 + "%";
      document.getElementById("display").innerText = result;
      return result;
    }
    
  }
  checkScore();