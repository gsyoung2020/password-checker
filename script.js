var alpha  = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var bigALPHA = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}"]

var email = ["@","."]

var dotCom = ["com","org","net","int","edu","gov","mil"]

let combo = alpha.concat(bigALPHA,numb,symbols);
console.log(combo)

var flag = new Object()

document.getElementById('pass').addEventListener("input", theChecker);

export function theChecker() {
  var password = document.getElementById('pass')
  var orignal = password.value;
  var passNew = orignal.split("");
  var passlength = orignal.split("").length;
  console.log(passNew);
  
  // A simple length checker using the length you get from the .split("") above if the password is equal or highter then 8 AND equal or lower the 24 it a passing/true statement sent to my flag var
  if (passlength >= 8 && passlength <=24){
    console.log("Password Length Matched")
    flag.passlenghtFLAG = true;
  } else (flag.passlenghtFLAG = false)

  // the __Check series of functions below use the ".some" function on the respective/choosen arrays. It sends the Item though it sectioned off in the the test and check aganist every input the user puts in. if the user has been in a input that corresponds with one of the fuctions it will send back a true value that will be added to the flag var. example "alphaCheck" check for only lower case letter if the user input has no the flag will stay false but it there is lower case turns true
  
  function alphaCheck(item) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        return flag.alphaFLAG = true
    } else ( flag.alphaFLAG = false)
   }  
  }

  function alphaBIGCheck(item) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        return flag.bigAlphaFLAG = true
    } else ( flag.bigAlphaFLAG = false)
   }  
  }

  function numbCheck(item) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        return flag.numbFLAG = true
    } else ( flag.numbFLAG = false)
   }  
  }

  function symbolsCheck(item) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        return flag.symbolsFLAG = true
    } else ( flag.symbolsFLAG = false)
   }  
  }

  alpha.some(alphaCheck)
  bigALPHA.some(alphaBIGCheck)
  numb.some(numbCheck)
  symbols.some(symbolsCheck)
  //This is a fail safe put in to avoid false flags activating as true even when there is nothing in the password section
  
  if (passlength  == 0){
    flag.alphaFLAG = false;
    flag.bigAlphaFLAG = false;  
    flag.numbFLAG = false;  
    flag.symbolsFLAG = false;
    flag.passlenghtFLAG = false;
  }
 //exact same as the __Check functions above but it will only check one all the other flags/checks have comeback as true. This is just a general check to ensure all items are their 
  if (flag.alphaFLAG == true && flag.bigAlphaFLAG == true && flag.numbFLAG == true && flag.symbolsFLAG == true && flag.passlenghtFLAG == true){
    combo.some(comboCheck) 
    function comboCheck(item) {
      var test = []
      test.splice(0,1,item)  
      for (let i = 0; i < passlength; i++) {
        if (passNew[i] == test) {
          console.log("passed")
          return flag.goodPasswordFLAG = true
      } else ( flag.goodPasswordFLAG = false)
     }  
    }
  }


  if (flag.alphaFLAG == false || flag.bigAlphaFLAG == false ||   flag.numbFLAG == false || flag.symbolsFLAG == false || flag.passlenghtFLAG == false){flag.goodPasswordFLAG = false}  

  //console.log(flag)
  return flag
}

document.getElementById('email').addEventListener("input", emailChecker);

export function emailChecker() {
  var mail = document.getElementById('email')
  var ogEmail = mail.value;
  var emNew = ogEmail.split("");
  var emlength = ogEmail.split("").length;

  var at;
  var dot;
  var coms;
  
  console.log(emNew);
  
  for (let i = 0; i < emlength; i++) {
      if (emNew[i] == email[0] ) {
       at = true
        break
    } else ( at = false)
  }  

  for (let i = 0; i < emlength; i++) {
      if (emNew[i] == email[1] ) {
        dot = true
        break
    } else ( dot = false)
  }

  if (emlength  == 0){
    var at = false;
    var dot = false;
    var coms = false;
  }

  /*
  function comsCheck(item) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < emlength; i++) {
      if (emNew[i] == test) {
        return coms  = true
    } else ( coms  = false)
   }  
  }
  */
if (at == true && dot == true) {
    //dotCom.some(comsCheck)
    //console.log(coms)
    flag.emFLAG = true
  } else (flag.emFLAG = false)
  
  console.log(flag)
  return flag
}

document.getElementById('uName').addEventListener("input", uNameChecker);

export function uNameChecker(){
  var usrName = document.getElementById('uName')
  var orig = usrName.value;
  var usrNameNew = orig.split("");
  var usrlength = orig.split("").length;
  console.log(usrNameNew);
  
  if (usrlength >= 4 && usrlength <=32){
    console.log("User name Length Matched")
    flag.nameLenghtFLAG = true
  } else (flag.nameLenghtFLAG = false )
  
  console.log(flag)
  return flag

}











  