// string query functions give information about a string

// example: includes - find a smaller within a bigger string
let fruits = "apples,bananas,oranges,pineapples";

// find out if the fruit strings include oranges
console.log("Does fruits have oranges?", fruits.includes("oranges"));

// indexOf: find and return the index of the start of a substring
//             01234567890123456
let sentence ="the quick brown fox jumps over the lazy dog";
console.log("fox starts at index", sentence.indexOf("fox"));

// .endsWith check if the ending of a string is that particular sub-string
// check file extension - check file is a .mp4
const filename = "movie.mp4";
if (filename.endsWith('.mp4')) {
    console.log("This is a Mp4 file")
} else {
    console.log("This is not a Mp4 file");
}

// using prompt, ask the user to enter their email address
// the email address must contain at least one @,  
// (if you want a challenge, check at most one @)
// and must one following domain: .edu or .edu.sg
const prompt = require('prompt-sync')();
const email = prompt("Please enter your email: ");
if (email.includes("@") && 
   email.indexOf("@") === email.lastIndexOf("@") && (email.endsWith(".edu") || email.endsWith(".edu.sg"))) {
    console.log("Email is valid")
} else {
    console.log("Email is not valid");
}