// Assignment Code
const generateBtn = document.querySelector("#generate");
// generate password function



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var lowerArr = lower.split("");
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upperArr = upper.split("");
  var num = "0123456789";
  var numArr = num.split("");
  var spec = "!@#$%^&*()_+?<>";
  var specArr = spec.split("");
  var allChars = [];
allChars = allChars.concat(lowerArr);
  var pwlength = prompt("Choose password length: 8-128 characters.");
  var password = "";




if(pwlength < 8 || pwlength > 128){
  alert("Password must be between defined length.")
  generatePassword()
}
if(confirm("Do you want lowercase characters?")){
  allChars.push(lowerArr);
}
if (confirm("Do you want uppercase characters?")) {
  allChars.push(upperArr);
}
if (confirm("Do you wamt numeric characters?")) {
  allChars.push(numArr);
}
if (confirm("Do you want special characters?")) {
  allChars.push(specArr);
}
if (allChars.length === 0) {
  alert("Minimum of one type of character must be chosen");
  generatePassword()
}
for (let i = 0; i < pwlength; ++i) {
  let random = Math.floor(Math.random() * Math.floor(allChars.length));
  password += allChars[random];
}

return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
