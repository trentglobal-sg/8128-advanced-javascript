// because a string can be accessed by an index,
// we can use a while loop to extract individual character
let s = "She sells seashell at the seashore";

// we want to count how many s in the string
let numberofS = 0;
let index = 0;
while (index < s.length) {
    if (s[index].toLowerCase() === "s") {
        // numberofS = numberofS + 1;
        numberofS += 1;
    }
    index++;
}
console.log("Number of S found =", numberofS);

// given a string, find the length of longest
//  sequence of repeating characters
// string = "aabbbcc"  => 3
// string = 'abcddeefff" => 3

// string = 'aaaabbccd' => 4
// string = 'abc' => 1
// alternative solution: https://onecompiler.com/javascript/454s2e697
const prompt = require('prompt-sync')();
const text = prompt("Please enter text: ");
let answer = 1;
let maxCount = 1;
let sequenceCharacter = text[0];
let i = 1;
while (i < text.length) {
    // check the current i is still part of the sequence
    if (text[i] === sequenceCharacter) {
        answer += 1;
        
    } else {
        sequenceCharacter = text[i];
        answer = 1;
    }
    if (answer > maxCount) {
        maxCount = answer;
    }
    i++;
}
console.log("max count =", maxCount);