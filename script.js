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
// Storing them all as the properties of an object, idk if that's a good idea or not

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

console.log("===== AFTER INPUT =====")
// This do...while forces you to enter a number, and coerces it into an actual number value. Cannot cancel out, either.
do {
  length = Number(prompt("Please enter desired password length.\nBetween 8 and 128 characters, please."))
} while (length>128 || length<8 || Number.isNaN(length));
console.log(length,"Characters Long");

upperSelected=confirm("Uppercase Characters?\nOK for Yes, Cancel for No")
console.log("Uppercase Characters:", upperSelected)

lowerSelected=confirm("Lowercase Characters?\nOK for Yes, Cancel for No")
console.log("Lowercase Characters:", lowerSelected)

numericSelected=confirm("Numeric Characters?\nOK for Yes, Cancel for No")
console.log("Numeric Characters:", numericSelected)

specialSelected=confirm("Special Characters?\nOK for Yes, Cancel for No")
console.log("Special Characters:", specialSelected)



// This is the function that I will have to eventually use
function generatePassword() {
  console.log("Generate Password Ran");
return("testing");
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
