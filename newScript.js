// Assignment Code
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
const passwordText = document.querySelector('#password');
const notifyText = document.querySelector('#copyNotify');

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    passwordText.value = password;
}

// Add event listeners to buttons
generateBtn.addEventListener('click', writePassword);
copyBtn.addEventListener('click', copyPassword);

// Set password's length with the slider
const slider = document.getElementById('characterRange');
const passwordLength = document.getElementById('passwordLength');
passwordLength.innerHTML = slider.value;
slider.oninput = () => {
    passwordLength.innerHTML = slider.value;
}

// Allows first checkbox to toggle all other checkboxes
function toggleCheckboxes(all) {
    const otherCheckboxes = document.getElementsByClassName('characters');
    for (let i = 0; i < otherCheckboxes.length; i++) {
        otherCheckboxes[i].checked = all.checked;
    }
}

function generatePassword() {
    // Establishing data set for all types of characters needed for passwords
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_~=+[]{}<>?/';
    
    // Initializes the base password as an empty string
    var basePassword = '';

    // Sets the password's length
    const passwordLength = slider.value;

    // Identify all other checkboxes
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

    // Returns an error if no checkboxes are checked
    if (!lowerCheckbox.checked) {
        if (!upperCheckbox.checked) {
            if (!numberCheckbox.checked) {
                if (!specialCheckbox.checked) {
                    finalPassword = 'Choose at least 1 type of character for your password!';
                    return finalPassword;
                }
            }
        }
    }

    // Hide "Password Copied!" if user generates another password
    notifyText.hidden = true;

    return finalPassword;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordText.value);
    notifyText.hidden = false;
}