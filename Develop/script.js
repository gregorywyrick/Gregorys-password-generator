// Assignment code here
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~\\'|}{[]:;?><,./-=";

var characterSelect = "";

function generatePassword() {
  var characterLength = prompt ("Choose a password length between 8 & 128 characters");
  if (characterLength < 8 || characterLength > 128) {
    window.alert( "Please choose a number within the range")
    return;
  }
  var symbolSelect = confirm ("Would you like to include symbols?");
  if (symbolSelect === true) {
    characterSelect += symbols;
  }
  var lowerSelect = confirm ("Would you like to include lowercase letters?")
  if (lowerSelect === true) {
    characterSelect += lettersLower;
  }
  var upperSelect = confirm ("Would you like to include uppercase letters?")
  if (upperSelect === true) {
    characterSelect += lettersUpper;
  }
  var numSelect = confirm ("Would you like to include numbers?")
  if (numSelect === true) {
    characterSelect += numbers;
  }
  if (characterSelect.length === 0) {
    window.alert( "Please choose at least one character type to include")
    return;
  }
  var userPassword = ""
  for (var i = 0; i < characterLength; i++) {
    var randomNumber = Math.floor(Math.random() * characterSelect.length);
    userPassword += characterSelect.substring(randomNumber, randomNumber +1);
  }

  return [userPassword]
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
