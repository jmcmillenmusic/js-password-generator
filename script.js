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

function generatePassword() {
  
  // Declaring variables for all types of characters needed for passwords
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
  // Sets the initial random password as an empty string to be filled later
  var randomPassword = [];
  console.log(randomPassword); // Testing purposes only

  // Shows the first prompt requesting the user to choose a password length between 8 and 128 characters
  var passwordLength = prompt("Choose a password length (must be between 8 and 128 characters).");
  
  // Converts what the user enters in the input field into a number (will return NaN if it's not a number)
  var passwordLength = Number(passwordLength);
  console.log(passwordLength, typeof passwordLength); // Testing purposes only
  
  // If the password length is not a number, outside the range, or not an integer, it displays an error message.
  // Otherwise, this function stores the password's length.
  if (isNaN(passwordLength) == true) {
    alert("Please enter a number.");
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 characters.");
  } else if (Number.isInteger(passwordLength) == false) {
    alert("Please enter a whole number.");
  } else {
    alert("Your password will be " + passwordLength + " characters long."); 
  }
  
  // Gives the user the option to include lowercase letters in their password
  if (confirm("Press OK to include lowercase letters in your password.")) {
    var randomPassword = randomPassword.concat(lowercase);
  }
  console.log(randomPassword); // Testing purposes only

  // Gives the user the option to include uppercase letters in their password
  if (confirm("Press OK to include uppercase letters in your password.")) {
    var randomPassword = randomPassword.concat(uppercase);
  }
  console.log(randomPassword); // Testing purposes only
  
  // Gives the user the option to include numbers in their password
  if (confirm("Press OK to include numbers in your password.")) {
    var randomPassword = randomPassword.concat(numbers);
  }
  console.log(randomPassword); // Testing purposes only

  // Gives the user the option to include special characters in their password
  if (confirm("Press OK to include special characters in your password.")) {
    var randomPassword = randomPassword.concat(specialCharacters);
  }
  console.log(randomPassword); // Testing purposes only
  console.log(passwordLength); // Testing purposes only

  // Initializes finalPassword array and fills it with random characters from user's included characters
  var finalPassword = [];
  console.log(finalPassword); // Testing purposes only
  for (i = 0; i < passwordLength; i++) {
    finalPassword.push(randomPassword[Math.floor(Math.random() * randomPassword.length)]);
  }

  // Converts array to string and returns the generated password
  var finalPassword = finalPassword.join("");
  console.log(finalPassword); // Testing purposes only
  return finalPassword;
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// First prompt: choose password length (range: 8 to 128)
// Second prompt: include lowercase? (Y/N)
// Third prompt: include uppercase? (Y/N)
// Fourth prompt: include numbers? (Y/N)
// Fifth prompt: include special characters? (Y/N)
// Prompts 2 through 5: at least one of these must be YES to generate password
