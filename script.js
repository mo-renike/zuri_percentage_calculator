function checkScore() {
    let num =  document.getElementById("score").value ;
  if (num > 24) {
      let errorMessage = `jo, bawo lo se gba ${num} over 24?`;
      document.getElementById("display").innerText = errorMessage;
      document.getElementById("3").style.display = "block";
      setTimeout((clear) => {window.location.reload()}, 3000);
      return errorMessage;
    }
    else if (isNaN(num)){
      let error = `So, You mean to tell me "${num}" a valid number`
      document.getElementById("display").innerText = error;
      document.getElementById("1").style.display = "block";
      setTimeout((clear) => {window.location.reload()}, 3000);
        return error ;
    } 


    else{
      let result = ((num / 24) * 100).toFixed(2);
      if (result >= 90) {
        document.getElementById("5").style.display = "block";
        document.getElementById("display").innerText = `${result}% osheyyy Mark Zuckerberg Opor!`;
        setTimeout((clear) => {window.location.reload()}, 3000);

        
      } else if (result >= 80) {
        document.getElementById("7").style.display = "block";
        document.getElementById("display").innerText = `${result}%  You are doing well!`;
        setTimeout((clear) => {window.location.reload()}, 3000);
        
      } else if (result >= 65) {
        document.getElementById("display").innerText = `${result}% Tor, You tried your best`;
        document.getElementById("2").style.display = "block";
        setTimeout((clear) => {window.location.reload()}, 3000);
      } else if (result >= 50) {
        document.getElementById("display").innerText = `${result}% Shey you will not drop out and be selling pure water bayi`;
        document.getElementById("6").style.display = "block";
        setTimeout((clear) => {window.location.reload()}, 3000);
      } else if (result >= 30 ) {
        document.getElementById("display").innerText = `${result}% I don commot my hand`;
        document.getElementById("8").style.display = "block";
        setTimeout((clear) => {window.location.reload()}, 3000);
      } else if (result < 29 && result > 0) {
        document.getElementById("display").innerText = `${result}% lol just get out of here`;
        document.getElementById("4").style.display = "block";
        setTimeout((clear) => {window.location.reload()}, 3000);
      } 
    
      return result;
    } 
  }
  
  checkScore();
  clear();

  
