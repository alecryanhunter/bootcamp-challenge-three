// Declaring our main variables up here at the beginning

var upperSelected = false
var lowerSelected = false
var numericSelected = false
var specialSelected = false
var length = 0

// Decalring the four character sets in arrays

var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// This turns the lowercase array into an uppercase array, so I only had to type it once
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
console.log("===== Original Four Arrays =====")
console.log(lowerChars);
console.log(upperChars);
console.log(numericChars);
console.log(specialChars);

// Shows the starting values of the variables upon page load

console.log("===== BEFORE INPUT =====")

console.log(length,"Characters Long");
console.log("Uppercase Characters:", upperSelected)
console.log("Lowercase Characters:", lowerSelected)
console.log("Numeric Characters:", numericSelected)
console.log("Special Characters:", specialSelected)


// Input Collector
// Prompts the user to enter a length between 8 and 128, and will coerce that result into a number
// Will repeat that step until an acceptable length is entered, will also repeat if a string is entered
  // This is based on the fact that coercing a string into a number like we have done will return NaN
// Then will send multiple prompts asking yes/no for the four data types
// Will repeat if none are selected, giving a specific error message saying that you must select one

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
// Array is constructed by concatenating the selected arrays onto the end of an empty array
// Also prints the list in the console for posterity

var charList=[];
function arrayConstructor() {
if (upperSelected==true) {
  charList = charList.concat(upperChars);
  }
if (lowerSelected==true) {
  charList = charList.concat(lowerChars);
  }
if (numericSelected==true) {
  charList = charList.concat(numericChars);
  }
if (specialSelected==true) {
  charList = charList.concat(specialChars);
}
console.log("===== CONCAT LIST ======")
console.log(charList)
}

// Password Constructor
// Creates the password by randomly selecting a character from the constructed array, and
// then appending it to itself

var result =""
function passwordConstructor() {
  for (var i=0;i<length;i++) {
    result = result+(charList[Math.floor(Math.random()*charList.length)]);
  }
}

// Complete Password Generator
// First, it resets the values of result and charList to empty, otherwise they will build
// up over multiple generations. Then, collects inputs, constructs the array, and generates
// the password following the above functions, then returns it out.

function generatePassword() {
  console.log("Generate Password Button Hit!");
  result=""
  charList=[]
  collectInputs();
  arrayConstructor();
  passwordConstructor();
  console.log("The password is",result.length,"characters long.")
  return result;
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