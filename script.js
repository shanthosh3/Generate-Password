// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseVal = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+-={}[]?<>,.:;'";
var numVal = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
