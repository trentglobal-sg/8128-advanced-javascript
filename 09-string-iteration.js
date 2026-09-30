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

// given a string, find the length of longest sequence of repeating characters
// string = "aabbbcc"  => 3
// string = 'abcddeefff" => 3
// string = 'abc' => 1