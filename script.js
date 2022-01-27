// character set variables

let UserChoice = "";
let character = "";
let generateBtn = document.querySelector("#generate");
let LowerCase = "abcdefghijklmnopqrstuvwxyz";
let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let choiceNumber = "0123456789";
let SpecialChar = "!@#$%^&*()_+}{:<>?/.,';][=-";


// prompt to select chars categories

function generatePassword() {
  let askUser = parseInt(
    window.prompt("Please select a password between 8 and 128")
  );
  if (askUser < 8 || askUser > 128) {
    alert("Please select a password that meets the number criteria");
  } else {
    let lowerCaseConfirm = window.confirm(
      "Would you like to include lowercase letters in the password?"
    );
    let upperCaseConfirm = window.confirm(
      "Would you like to include uppercase letters in the password?"
    );
    let numberConfirm = window.confirm(
      "would you like to include numbers in the password?"
    );
    let specialCharConfirm = window.confirm(
      "Would you like to include special characters in your password?"
    ); //confirm user choice
    if (lowerCaseConfirm === true) {
      UserChoice += LowerCase;
    }
    if (upperCaseConfirm === true) {
      UserChoice += UpperCase;
    }
    if (numberConfirm === true) {
      UserChoice += choiceNumber;
    }
    if (specialCharConfirm === true) {
      UserChoice += SpecialChar;
    } //concatenate the random chars

    for (let i = 0; i < askUser; i++) {
      let password = Math.floor(UserChoice.length * Math.random());
      character += UserChoice.charAt(password);
    }
    let passwordText = document.querySelector("#password");
    passwordText.value = character;
  }
} //randomly arrange the chars in the string
generateBtn.addEventListener("click", generatePassword); //generate button