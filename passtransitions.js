import {theChecker, emailChecker, uNameChecker} from "./script.js"

//Inputs Varaibles
var pWrd = document.getElementById("pass") //Password Input
var eMail = document.getElementById("email") //Email Input
var NameInput = document.getElementById("uName") //User Name Input

//Circle Varaibles
var letCir = document.getElementsByClassName("dot")[0] //Letters Needed Circle
var numbCir = document.getElementsByClassName("dot")[1] //Numbers Needed Circle
var capCir = document.getElementsByClassName("dot2")[0] //Captial Needed Circle
var symCir = document.getElementsByClassName("dot2")[1] //Symbols Needed Circle

//"Needed" text varaibles
var passed =  document.getElementById('passed') // for the text that pops up when all the flags are passed
var lenghtCar = document.getElementById("pass2") //Password Characters Text
var usrMail = document.getElementById("emailtxt") // Email txt
var usrName = document.getElementById("uNametxt") // User Name txt

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

pWrd.oninput = function(){
  sleep(200).then(() => { 
      var pass = theChecker()
    //Beginning of style chocies for the circles
      if (pass.alphaFLAG == true){
        letCir.style.background = 'rgb(102,237,93)'
      } else (letCir.style.background = 'rgb(250,1,30)')
    
      if (pass.numbFLAG == true){
        numbCir.style.background = 'rgb(102,237,93)'
      } else (numbCir.style.background = 'rgb(250,1,30)')
    
      if (pass.bigAlphaFLAG == true){
        capCir.style.background = 'rgb(102,237,93)'
      } else (capCir.style.background = 'rgb(250,1,30)')
    
      if (pass.symbolsFLAG == true){
        symCir.style.background = 'rgb(102,237,93)'
      } else (symCir.style.background = 'rgb(250,1,30)')
    
      if (pass.goodPasswordFLAG == true){
        passed.innerHTML = "PASSED"
        passed.style.fontFamily = 'Secular One'
      } else (passed.innerHTML = "")
      //End of style chocies for the circles
    
      if (pass.passlenghtFLAG == true){
        lenghtCar.style.color = 'rgb(102,237,93)'
      } else (lenghtCar.style.color = 'rgb(250,1,30)')
    
      console.log(pass)
      
    });
}

eMail.oninput = function() {
  var pass = theChecker()
  console.log(pass)
  if (pass.emFLAG == true){
    usrMail.style.color = 'rgb(102,237,93)'
  } else (usrMail.style.color = 'rgb(250,1,30)')
}

NameInput.oninput = function() {
  var pass = theChecker()
  console.log(pass)
  if (pass.nameLenghtFLAG == true){
    usrName.style.color = 'rgb(102,237,93)'
  } else (usrName.style.color = 'rgb(250,1,30)')
}
