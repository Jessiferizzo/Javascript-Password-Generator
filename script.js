// Assignment code here//
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

function generatePassword() {
  console.log("You clicked it!");

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
  var userPassword = []
  var randomPassword=[]

  //WHEN prompted for the length of the password, choose password length 8-128 characters)
  var passwordLength = parseInt(window.prompt("How many characters do you want your password to be? Please input a number between 8-128 to indicate how many characters."));

  if (passwordLength >= 128 || passwordLength <= 8 || typeof (passwordLength) !== "number") {
    window.alert("Make sure you choose a valid number between 8-128 only");
    console.log(passwordLength);
    return generatePassword();
  };

  //prompted to confirm commands//
  var lowerCaseConfirm = window.confirm("Do you want to include lowercase letters?");
  console.log("yes lowercase");
  var upperCaseConfirm = window.confirm("Do you want to include uppercase letters?");
  console.log("yes uppercase");
  var numericConfirm = window.confirm("Do you want to include numbers?");
  console.log("yes numbers");
  var symbolConfirm = window.confirm("Do you want to include special characters?");
  console.log("yes u r a special character");

  console.log(upperCaseConfirm, lowerCaseConfirm, numericConfirm, symbolConfirm);
  //check got at least 1 user criteria//
  if (!upperCaseConfirm && !lowerCaseConfirm && !numericConfirm && !symbolConfirm) {
    alert("Please choose at least one criteria.");
    return generatePassword();
  };

  while (userPassword.length < passwordLength) {
    //add user selection criteria
    console.log("go");
    var pickNum=Math.floor(Math.random()*4)+1
    if(pickNum===1){
      if (lowerCaseConfirm) {
        var newPassword = userPassword.concat(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
        userPassword = newPassword
        //if length is same as input, end loop
        if (userPassword.length === passwordLength)
          break;
      } 
    }
    if(pickNum===2){
      if (upperCaseConfirm) {
        var newPassword = userPassword.concat(upperCase[Math.floor(Math.random() * upperCase.length)]);
        userPassword = newPassword
        if (userPassword.length === passwordLength)
          break;
        console.log(userPassword);
      }
    }
    if(pickNum===3){
      if (numericConfirm) {
        var newPassword = userPassword.concat(numeric[Math.floor(Math.random() * numeric.length)]);
        userPassword = newPassword
        if (userPassword.length === passwordLength)
          break;
        console.log(userPassword);
      }
    }
    if(pickNum===4){
      if (symbolConfirm) {
        var newPassword = userPassword.concat(symbol[Math.floor(Math.random() * symbol.length)]);
        userPassword = newPassword
        if (userPassword.length === passwordLength)
          break;
        console.log(userPassword);
      }
    }
  

  };
  
  return newPassword.join('');

  
    



    //join('');
};

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input//

  function writePassword() {
    var password = generatePassword(); //calls generatepassword function and assigns a value
    var passwordText = document.querySelector("#password");// find element using selector to input text

    passwordText.value = password; //assign that element a value of password
  }

  // Add event listener to generate button//
  generateBtn.addEventListener("click", writePassword);
