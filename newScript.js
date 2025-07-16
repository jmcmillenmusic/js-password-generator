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

// Set password's length with the slider
var slider = document.getElementById('characterRange');
var passwordLength = document.getElementById('passwordLength');
passwordLength.innerHTML = slider.value;
slider.oninput = () => {
    passwordLength.innerHTML = slider.value;
}

// Regular expressions for each character set to be included or excluded from the generated password
// Currently not being used
const lowerRegex = '[a-z]';
const upperRegex = '[A-Z]';
const numberRegex = '[0-9]';
const specialRegex = '[\!\@\#\$\%\^\&\*\(\)\~\+\=\|\{\}\[\]\_\\\<\>\,\.\?\/]';

function generatePassword() {
    // Establishing data set for all types of characters needed for passwords
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialCharacters = '!@#$%^&*()_`~=+[]{}|,.<>?/';
    
    // Initializes the base password as an empty string
    var basePassword = '';

    // Sets the password's length
    var passwordLength = slider.value;

    // Identify all checkboxes
    const lowerCheckbox = document.getElementById('lowercase');
    const upperCheckbox = document.getElementById('uppercase');
    const numberCheckbox = document.getElementById('numbers');
    const specialCheckbox = document.getElementById('specialCharacters');

    // Adds characters to basePassword for every checkbox that's checked
    if (lowerCheckbox.checked) {
        var basePassword = basePassword.concat(lowercase);
    }
    if (upperCheckbox.checked) {
        var basePassword = basePassword.concat(uppercase);
    }
    if (numberCheckbox.checked) {
        var basePassword = basePassword.concat(numbers);
    }
    if (specialCheckbox.checked) {
        var basePassword = basePassword.concat(specialCharacters);
    }

    // Initializes finalPassword and fills it with random characters from user's included characters
    var finalPassword = '';
    for (i = 0; i < passwordLength; i++) {
        finalPassword += basePassword[Math.floor(Math.random() * basePassword.length)];
    }

    return finalPassword;
}