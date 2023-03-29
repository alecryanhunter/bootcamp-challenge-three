// REQUIREMENTS:
// Password has selectable criteria as following:
// lowercase, uppercase, numeric, and special characters (1 must be selected)
// Password has selectable length, between 8 and 128 characters
// The password should generate and be displayed on the page or displayed in an alert
// Formula that generates password MUST be named generatePassword()

// Some way to have selectable criteria
// Checkboxes, or multiple forms? Must verify that one is selected at min

// Some way to generate random characters from the four lists

// Some way to combine the random characters

// I'm guessing these are probably the inputs I need
// The output is singular, the return value of the generate password function


// Can also store the four data types in individual arrays.

var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// This turns the lowercase array into an uppercase array. The variable has to be outside so that it will be stored globally.
var upperChars = []
function upperMaker() {
  for (var i=0;lowerChars.length>i;i++) {
    upperChars.push(lowerChars[i].toUpperCase());
  }
}
upperMaker();
var numericChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = [" ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

// Lists out the four data types in the console, for reference
console.log(lowerChars);
console.log(upperChars);
console.log(numericChars);
console.log(specialChars);

// Input Collector
// This do...while forces you to enter a number, and coerces it into an actual number value. Cannot cancel out, either.

var upperSelected = false
var lowerSelected = false
var numericSelected = false
var specialSelected = false
var length = 0

console.log("===== BEFORE INPUT =====")

console.log(length,"Characters Long");
console.log("Uppercase Characters:", upperSelected)
console.log("Lowercase Characters:", lowerSelected)
console.log("Numeric Characters:", numericSelected)
console.log("Special Characters:", specialSelected)

function collectInputs() {
  console.log("===== AFTER INPUT =====")
  do {
    length = Number(prompt("Please enter desired password length.\nBetween 8 and 128 characters, please."))
  } while (length>128 || length<8 || Number.isNaN(length));
  console.log(length,"Characters Long");
  do {
    upperSelected=confirm("Uppercase Characters?\nOK for Yes, Cancel for No")
    console.log("Uppercase Characters:", upperSelected)
    
    lowerSelected=confirm("Lowercase Characters?\nOK for Yes, Cancel for No")
    console.log("Lowercase Characters:", lowerSelected)
    
    numericSelected=confirm("Numeric Characters?\nOK for Yes, Cancel for No")
    console.log("Numeric Characters:", numericSelected)
    
    specialSelected=confirm("Special Characters?\nOK for Yes, Cancel for No")
    console.log("Special Characters:", specialSelected)
    if ((upperSelected || lowerSelected || numericSelected || specialSelected) == false) {
      alert("Must select at least one character type!")
      continue;
    } 
  } while(!(upperSelected || lowerSelected || numericSelected || specialSelected))
}

// Character Array Constructor
// And we will put it all together by concatenating them together, based on the inputs
console.log("===== CONCAT LIST ======")
var charList = lowerChars.concat(numericChars);
console.log(charList);

function arrayConstructor() {
  
}

// Password Constructor
// Can append to the end of a string by just using a '+' after it's own variable

var result =""
function passwordConstructor() {
  for (var i=0;i<8;i++) {
    result = result+(charList[Math.floor(Math.random()*charList.length)]);
  }
}
passwordConstructor()
console.log(result)

// ================

// This is the function that I will have to eventually use
function generatePassword() {
  console.log("Generate Password Button Hit!");
  collectInputs();
  return;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
