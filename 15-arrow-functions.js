// in javascript, it's very common to use arrow functions
// 1. all arrow functions are anon. functions (i.e have no name)
// 2. arrow functions are values too (can be assigned to variable, can be passed
// to functions, can be returned from functions)

// https://link.excalidraw.com/l/4cR8bJPPafb/9lZHrC1YIok
const compareLength = function(a,b) {
    return a.length - b.length;
}

// eqv
const compareLength2 = (a,b) => a.length - b.length

// arrow functions can be used as a parameter
const numbers = [77, 123, 124, 8, 9];
numbers.sort((a,b) =>  b-a);