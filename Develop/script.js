// Assignment code here
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~\\'|}{[]:;?><,./-=";

var characterSelect = "";

function generatePassword() {
  var characterLength = prompt ("Choose a number between 8 & 128");
  console.log(characterLength);
  if (characterLength < 8 || characterLength > 128) {
    window.alert( "Please choose a number within the range")
    return;
  }
  var symbolSelect = confirm ("Would you like to include symbols?");
  console.log(symbolSelect);
  if (symbolSelect === true) {
    characterSelect += symbols;
  }
  var lowerSelect = confirm ("Would you like to include lowercase letters?")
  console.log(lowerSelect);
  if (lowerSelect === true) {
    characterSelect += lettersLower;
  }
  var upperSelect = confirm ("Would you like to include uppercase letters?")
  console.log(upperSelect);
  if (upperSelect === true) {
    characterSelect += lettersUpper;
  }
  var numSelect = confirm ("Would you like to include numbers?")
  console.log(numSelect);
  if (numSelect === true) {
    characterSelect += numbers;
  }
  console.log(characterSelect);
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
