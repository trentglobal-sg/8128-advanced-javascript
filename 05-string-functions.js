// string functions
// 1. transformation functions
// those functions modify and return a copy of a string
const favoriteFruit= "apples";

// call toUpperCase on the string inside the favoriteFruit variable
// the function does not change the original string, it returns a modified copy
console.log("favoriteFruit.toUpperCase() =>", favoriteFruit.toUpperCase());
console.log("favoriteFruit = ", favoriteFruit)

const name = "TAN AH KOW";
console.log(name.toLowerCase());

// trim: remove white spaces to the front and to the back of a string
const email=" admin@asd.com  ";
console.log("email without trim =>", email +"!");
console.log("email with trim =>", email.trim()+"!");

if (email.trim()==="admin@asd.com") {
    console.log("Welcome admin");
}

// using prompt-sync and prompt, ask the user to enter yes or no
// but the user could enter YeS, YES, yes, YEs ==> all must be recongized as yes
// and the user could enter no, NO, nO, No ==> all must be recongized as no
// and the user could include white spaces at the front or at the back
// use if/else to decide if the user said yes or no
const prompt = require('prompt-sync')();
let userReply = prompt("yes or no: ");
if (userReply.toLowerCase().trim() === "yes") {
    console.log("You said yes")
} else if (userReply.toLowerCase() === "no") {
    console.log("You said no");
} else {
    console.log("You said neither yes or no");
}