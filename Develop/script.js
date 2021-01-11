// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialChar = ["!", "\"", "#", "$", "%", "$", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
let numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
let passwordArray = [];

// Function to prompt user to select 3 criteria: 
// password length, case, and numbers and/or special characters.
let generatePassword = function(){
  // prompt user to enter number of password characters
  let passwordLength = prompt("Enter desired length of your new password between 8 and 128 characters.");
  // value must be between 8 and 128
  if (passwordLength > 7 && passwordLength < 129){
      value = passwordLength;
      console.log(passwordLength);
  }
  else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid password length, between 8 and 128 characters.")
      generatePassword();
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
        generatePassword();
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
      generatePassword();
      break;
    }
  console.log(numCharSel);


// combine selected arrays
// call this function outside this scope!!
  let selectedArray = caseSel.concat(numCharSel);

  console.log(selectedArray);


// retrieve random value from combined select array and iterate over length of password characters.
  for (let i = 0; i < passwordLength; i++) {
      // FIGURE OUT HOW TO PULL A RANDOM VALUE FROM selectedArray AND PUT IT IN NEW ARRAY.
  
        let randomValue = Math.floor(Math.random() * selectedArray.length);
        console.log(randomValue);
        passwordArray.push(selectedArray[randomValue]);
        console.log(passwordArray);
        // get a single value from array by using math.random to assign the index value of the selectedArray

        // push that value into a new array that will contain the characters of the password.
 
    }
  // use .toString to convert the password array into a single string value.
  let password = passwordArray.join('');
  console.log(password);
  
  debugger;
  // confirm selected criteria and if ok, writePassword();
  if (confirm("Click OK or press Enter to generate your random password.")) {
  
    
    // //  create div element
    // let passwordTextEl = document.createElement("div");

    // Write password to the #password input
    function writePassword() {

      console.log(password);
      // select text area in DOM
      let passwordText = document.querySelector("#password");
      // send value to text area
      passwordText.value = password;

    }
  }
  else {
    return;
  }
  
  writePassword();
  // end of generatePassword();
};





// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
