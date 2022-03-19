// Assignment code here//
function generatePassword (){
  console.log ("You clicked it!");

  var password = "";
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase= "abcdefghijklmnopqrstuvwxyz";
  var numeric= '0123456789';
  var specialChar= "!\#$%&'())*+,-./:;<=>?@[\]^_`{|}~";
  var passwordLength= 

//WHEN prompted for the length of the password, choose password length 8-128 characters)
var passwordLength= window.prompt ("Please enter a number between 8-128 to choose the length of your password");
if ()
  
//prompted to confirm commands//
var lowerCase= window.confirm ("Do you want to include lowercase letters?");
var upperCase= window.confirm ("Do you want to include uppercase letters?");
var numeric= window.confirm ("Do you want to include numbers?");
var specialChar= window.confirm ("Do you want to include special characters?");

/*function lengthRange(inputtxt, minlength, maxlength)
{  	
   var userInput = inputtxt.value;  
   if(userInput.length >= minlength && userInput.length <= maxlength)
      {  	
        return true;  	
      }
   else
      {  	
	alert("Please input between " +minlength+ " and " +maxlength+ " characters");  		
        return false;  	
      }  */

//THEN I choose a length of at least 8 characters and no more than 128 characters
//function passwordLength () {}

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//Validate input? 

//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//-output randomized password

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//-display password in alert window 
  
  return "Here is your password brah";
}


// Get references to the #generate element//
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

/*const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
*/




// Write password to the #password input//

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


/*let lowercaseUppercaseNumber = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function lowercaseUppercaseNumberF(length) {
    let result = ' ';
    const charactersLength = lowercaseUppercaseNumber.length;
    for ( let i = 0; i < length; i++ ) {
        result += lowercaseUppercaseNumber.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
   } */



// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword)
 