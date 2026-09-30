// there are certain values that only exist in JavaScript (uniquely JavaScript)
// primitive data types
// - string, boolean and numbers
// reference data types
// - arrays and objects
// unique data values in javascript

//////////// UNDEFINE //////////////
let x;
console.log(x);  // <-- undefined

// foobar takes two parameters and DON'T RETURN ANYTHING
function foobar(x, y) {
    console.log(x, y);
}

// addTwo receieves two parameters and RETURNS the sum
function addTwo(n1, n2) {
    return n1 + n2;
}

foobar();
let y = foobar(2,3);
console.log(y); // y will contain undefined because foobar doesn't return any value

// ////////////////// NULL /////////////////////////////////////////////////
// null values are nothing, empty and does not exist
// null is always assigned by the programmer, so it's a conscious  decision
// we use null as placeholder values
let z = null;
let numbers = [10, 11, 101, 25, 12];
let largestNumber = null;
let i = 0;
while (i < numbers.length) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i];
    }
    i++;
}
console.log('largest number=', largestNumber);

//////////////////////////////////// NaN
// NaN happens when performing arth. operators on invalid values (aka not numbers)
let price=100;
let gstRate = "nine percent";
console.log(price * gstRate);  // <-- NaN
let price2;
console.log(price2 * gstRate); //<-- undefined * 0.09 => NaN

let a = 1;
let b;
let c = 2;
console.log(a+b/c);  // => 1+undef/2 => NaN/2 => NaN

////// infinity
console.log(1/0);  // -> infinity