// anytime you have curly braces you have a scope
// except for objects
let x = 3;  // if a variable or function is not created inside a { }, then it is in the global scope
{  
     // `let` creates a new variable
    let x = 4;
    console.log("x=", x);
}
console.log("x2 =", x);  // when we refer to a variable in the global scope, we will use the global scope

const prompt = require('prompt-sync')();
const tickets = parseInt(prompt("How many tickets you want to buy?"));

// if you must buy more than 3 tickets, you get a 10% discount
// calculate and show the total the user must pay
let totalPrice = null;
if (tickets > 3) {
    totalPrice = tickets * 10 * 0.9;
} else {
    totalPrice = tickets * 10;
}

let y = 10;
{
    let y = 20;
    {
        let = 30;
    }
    {
        console.log("y=",y);
    }
}

function foobar(x, y) {
    let total = x + y;
    return total;
}
let total = 7;
foobar(10, 20);
console.log(total);