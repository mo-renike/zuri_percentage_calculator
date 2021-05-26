function checkScore() {
    let num =  document.getElementById("score").value ;
  if (num > 24) {
      let errorMessage = `jo, bawo lo se gba ${num} over 24?`;
      document.getElementById("display").innerText = errorMessage;
      document.getElementById("3").style.display = "block";
      return errorMessage;
    }
    //if it is not a number
    else if (isNaN(num)){
      let error = `So, You mean to tell me "${num}" a valid number`
      document.getElementById("display").innerText = error;
      document.getElementById("1").style.display = "block";
        return error ;
    }
    else{
      let result = (num / 24) * 100;
      if (result >= 90) {
        document.getElementById("5").style.display = "block";
        document.getElementById("display").innerText = `${result}% osheyyy Mark Zuckerberg!`;
        
      } else if (result >= 80) {
        document.getElementById("7").style.display = "block";
        document.getElementById("display").innerText = `${result}%  You are doing well!`;
        
      } else if (result >= 65) {
        document.getElementById("display").innerText = `${result}% Tor, You sef come`;
        document.getElementById("2").style.display = "block";
      } else if (result >= 50) {
        document.getElementById("display").innerText = `${result}% Shey you will not drop out and be selling pure water bayi`;
        document.getElementById("6").style.display = "block";
      } else if (result >= 30 ) {
        document.getElementById("display").innerText = `${result}% lol just get out of here`;
        document.getElementById("4").style.display = "block";
      } else if (result < 29 && result!== 0) {
        document.getElementById("display").innerText = `${result}% boya you should give up dear`;
        document.getElementById("8").style.display = "block";
      }
      
      return result;
    } 
    
  }
  checkScore();