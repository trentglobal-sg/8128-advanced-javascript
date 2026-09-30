//                012345678901234567890123456789
const sentence = "Jack and Jill went up the hill";
// we can access a string by its index
console.log("First character of sentence =", sentence[0]);
console.log("sentence.charAt(0) =", sentence.charAt(0));
console.log("sentence.at(0) =", sentence.at(0));
// BUT unlike -MMan array, we cannot change a string via index
sentence[0] = 'j';
console.log(sentence); 

// slice functions
// - get a substring (i.e smaller string) from a string
//                012345678901234567890123456789012345
const greeting = "Merry Christmas and a Happy New Year";
// start a index 2, slice up to index 5, but exclude index 5 (original string is not changed)
console.log(greeting.slice(2, 5));  // => "rry"
console.log(greeting.slice(10, 20)) // => "stmas and "

// if we use slice with only one parameter, it will start from
// that index and slice all the to the end
console.log(greeting.slice(20)); // => a Happy New Year

// to represent dates, we will use the ISO date format
// YYYY-DD - where YYYY is the year, MM is the month, DD is the day
// use prompt, ask user to enter the date
// then print out the year, month and day
// challenge: check for invalid months (...and days). Ignore leap year
const prompt = require('prompt-sync')();
const date = prompt("Enter date: ");
const year = date.slice(0, 4);
const month = date.slice(5, 7);
const day = date.slice(8);
console.log("year =", year);
console.log("month =", month);
console.log("day=", day);
if (parseInt(month) < 1 || parseInt(month) > 12) {
    console.log("Invalid month");
}