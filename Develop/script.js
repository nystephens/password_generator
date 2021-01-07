// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialChar = ["!", "\"", "#", "$", "%", "$", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
let numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];


// prompt user to enter number of password characters

// value must be between 8 and 128

// if left blank then generate random number between 8 - 128



// prompt user for lower case, upper case, or both

// record user's response if valid

// else if user enters invalid response, alert that an incorrect response was entered

// restart function if response is invalid



// promt user for special characters, numbers, or both

// record user's response if valid

// else if user enters invalid response, alert that an incorrect response was entered

// restart function if response is invalid



// combine selected arrays

// retrieve random value from combined select array and iterate over length of password characters.



// Write password to the #password input
function writePassword() {
  // pass the randomly generated password into "password" variable
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // passing the password text into the text area
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
