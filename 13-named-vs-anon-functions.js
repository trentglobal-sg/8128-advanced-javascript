
// usually, JavaScript is imperative (line by line)
// to use a variable we must define the variable first
let x = 42;
console.log(x);

f(3,4); // <-- WON'T WORK

// anonymous functions are NOT hoisted
let f = function(a,b) {
    return a + b;
}

console.log("foobar(4,5) =", foobar(4, 5));

// but named functions can be declared after you use it
// this is because in JS, functions are hoisted
// when you run a JS file, the JavaScript interperter
// will scan the file for all function declarations
// and bring them to the top
function foobar(x, y) {
    return x + y;
}
