var alpha  = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var bigALPHA = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var symbols = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","?"]

var email = ["@","."]


let combo = alpha.concat(bigALPHA,numb,symbols);
console.log(combo)

var alphaFLAG = false;
var bigAlphaFLAG = false;
var numbFLAG = false;
var symbolsFLAG = false;
var passlenghtFLAG = false;
var goodPasswordFLAG = false;

document.getElementById('pass').addEventListener("input", theChecker);

export function theChecker() {
  var password = document.getElementById('pass')
  var orignal = password.value;
  var passNew = orignal.split("");
  var passlength = orignal.split("").length;
  console.log(passNew);
    
  // A simple length checker using the length you get from the .split("") above if the password is equal or highter then 8 AND equal or lower the 16 it triggers something.....
  if (passlength >= 8 && passlength <=16){
    console.log("Password Length Matched")
    passlenghtFLAG = true;
  }

  
  for (let i = 0; i < passlength; i++) {
  var flagA =(element) => element == passNew[i] 
  }

  console.log(alpha.some(flagA))

  bigALPHA.forEach(bigALPHACheck)
  function bigALPHACheck(item,index) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        console.log ("BIG-alpha passed")
        bigAlphaFLAG = true
    } else (console.log("BIG-alpha failed"))
   }  
  }
  
  numb.forEach(numCheck)
  function numCheck(item,index) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        console.log ("number passed")
        numbFLAG = true
    } else (console.log("number failed"),  numbFLAG = false)
   }  
  }

  symbols.forEach(symbolsCheck)
  function symbolsCheck(item,index) {
    var test = []
    test.splice(0,1,item)  
    for (let i = 0; i < passlength; i++) {
      if (passNew[i] == test) {
        console.log ("symbols passed")
        symbolsFLAG = true
    } else (console.log("symbols failed"))
   }  
  }

  if (alphaFLAG == true && bigAlphaFLAG == true && numbFLAG == true && symbolsFLAG == true && passlenghtFLAG == true){
    combo.forEach(myFunction)
    function myFunction(item,index) {
      var test = []
      test.splice(0,1,item)  
      for (let i = 0; i < passlength; i++) {
        if (passNew[i] == test) {
          console.log ("FINAL CHECK")
          goodPasswordFLAG = true
      } else (console.log("NOT ALL ELEMENTS"))
     }  
    } 
  }

  if (goodPasswordFLAG == true) {
    alert("that's a useable password")
    console.log(passNew)
  }

  console.log(alphaFLAG)
  return numbFLAG
 
}









  