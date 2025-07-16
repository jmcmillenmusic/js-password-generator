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

// Creates the password through a series of user prompts
function generatePassword() {
  
  // Declaring variables for all types of characters needed for passwords
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
  // Sets the initial random password as an empty string to be filled later
  var randomPassword = [];

  // Shows the first prompt requesting the user to choose a password length between 8 and 128 characters
  var passwordLength = prompt("Choose a password length (must be between 8 and 128 characters).");
  
  // Converts what the user enters in the input field into a number (will return NaN if it's not a number)
  var passwordLength = Number(passwordLength);
  
  // If the password length is not a number, outside the range, or not an integer, it displays an error message.
  // Otherwise, this function stores the password's length.
  if (isNaN(passwordLength) == true) {
    alert("Please enter a number.");
    return('Password length must be a number!');
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 characters.");
    return('Password length must be between 8 and 128 characters!');
  } else if (Number.isInteger(passwordLength) == false) {
    alert("Please enter a whole number.");
    return('Password length must be a whole number!');
  } else {
    alert("Your password will be " + passwordLength + " characters long."); 
  }
  
  // Gives the user the option to include lowercase letters in their password
  if (confirm("Press OK to include lowercase letters in your password.")) {
    var randomPassword = randomPassword.concat(lowercase);
  }

  // Gives the user the option to include uppercase letters in their password
  if (confirm("Press OK to include uppercase letters in your password.")) {
    var randomPassword = randomPassword.concat(uppercase);
  }
  
  // Gives the user the option to include numbers in their password
  if (confirm("Press OK to include numbers in your password.")) {
    var randomPassword = randomPassword.concat(numbers);
  }

  // Gives the user the option to include special characters in their password
  if (confirm("Press OK to include special characters in your password.")) {
    var randomPassword = randomPassword.concat(specialCharacters);
  }

  // If the user excludes all possible characters, they get an error message.
  if (randomPassword.length < 10) {
    alert("Your password must include at least one of the following: uppercase characters, lowercase characters, numbers, and special characters.");
    return('Your password must include at least one of the following: uppercase characters, lowercase characters, numbers, and special characters.');
  }

  // Initializes finalPassword array and fills it with random characters from user's included characters
  var finalPassword = [];
  for (i = 0; i < passwordLength; i++) {
    finalPassword.push(randomPassword[Math.floor(Math.random() * randomPassword.length)]);
  }

  // Converts array to string and returns the generated password
  var finalPassword = finalPassword.join("");
  return finalPassword;
}
