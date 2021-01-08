// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialChar = ["!", "\"", "#", "$", "%", "$", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
let numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Function to prompt user to select 3 criteria: 
// password length, case, and numbers and/or special characters.
let criteriaSelection = function(){
  // prompt user to enter number of password characters
  let passwordLength = prompt("Enter desired length of your new password between 8 and 128 characters.");
  // value must be between 8 and 128
  if (passwordLength > 7 && passwordLength < 129){
      value = passwordLength;
      console.log(passwordLength);
  }
  else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid password length, between 8 and 128 characters.")
    criteriaSelection();
    } 
  // else if (passwordLength === "") {
  // // if left blank then generate random number between 8 - 128
  // }


  // CASE PROMPT BEGIN

  // prompt user for lower case, upper case, or both

  let caseSel = prompt("Would you like you password to contain lower case letters, upper case letters or both?  Please enter '1' for lower case, '2' for upper case, or '3' for both.");
  // record user's response if valid

    // use switch case to carry out action
    caseSel = parseInt(caseSel);
    switch (caseSel) {
      case 1:
        caseSel = lowerCase;
        break;
      case 2:
        caseSel = upperCase;
        break;
      case 3:
        caseSel = lowerCase.concat(upperCase);
        break;
      default:
        // else if user enters invalid response, alert that an incorrect response was entered
        alert('You did not pick a valid option. Try again.');
        
        // restart function if response is invalid
        criteriaSelection();
        break;
      }

  console.log(caseSel);

// promt user for special characters, numbers, or both
  let numCharSel = prompt("Would you like your password to have numbers, special characters, or both? Please enter '1' for numbers, '2' for special characters, or '3' for both.");
  numCharSel = parseInt(numCharSel);
  switch (numCharSel) {
    case 1:
      numCharSel = numbers;
      break;
    case 2:
      numCharSel = specialChar;
      break;
    case 3:
      numCharSel = numbers.concat(specialChar);
      break;
    default:
      // else if user enters invalid response, alert that an incorrect response was entered
      alert('You did not pick a valid option. Try again.');
      
      // restart function if response is invalid
      criteriaSelection();
      break;
    }
  console.log(numCharSel);


// combine selected arrays
// call this function outside this scope!!
  let selectedArray = caseSel.concat(numCharSel);

  console.log(selectedArray);
// end of criteriaSelection();
};


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
generateBtn.addEventListener("click", criteriaSelection);
