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