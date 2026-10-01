// in JavaScript, a first class citizen is actaully a value
// primitive: numbers, strings, booleans
// reference: arrays, objects, functions

// consider number
let x = 42;  // can assign a number to a varaible
function foobar(y) {

}
foobar(42); // we can use a number as a parameter

function asd() {
    return 42;  // we can return a number from a function
}

// ---------------------------------------------------------
// the below syntax shows an annoymous function
let f = function() {
    console.log("hello world")
}
f();

// assign Math.max to a variable (don't put () at the back if you want to
// refer to the function)
let m = Math.max;
console.log(m(1,3));

let c = console.log;
c("Shortform");