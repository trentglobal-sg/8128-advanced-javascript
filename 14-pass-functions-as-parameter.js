// some JavaScript functions recieve functions as parameters
const fruits = ["apples", "oranges", "pineapples", "durians"];
fruits.sort();
console.log(fruits);

const numbers = [-10, 5, -100, 7, 12];
numbers.sort();
console.log(numbers);

// to sort in ascending order
function numberCompare(a, b) {
    a = Number(a);
    b = Number(b);
    if (a===b) {
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
}
// largest to smallest
function numberCompareDescending(a, b) {
    if (a === b) {
        return 0;
    } else if (a < b) {
        return 1;
    } else {
        return -1;
    }
}

const n2 = [10, 11, 12, 21, 23, 24, 31, 32, 31, 1, 2,3]
n2.sort(numberCompare);
console.log("n2 =", n2);

// sort n2 n descending order
n2.sort(numberCompareDescending);
console.log("n2 after sorted by descending order =", n2);

const names = ["Tony Stare", "Peter Barker", "Steve Over", "Bark Rogers", "Dave", "Jay"]
// sort the names by the number of characters they have in ascending order
// challenge: if two names tied for the same length, break the tie by alphabetical order
function compareLength(a, b) {
    return a.length - b.length;
}

function compareLengthBreakTie(a,b) {
    let diff = a.length - b.length;
    if (diff === 0) {
        // have to break tie
        if (a === b) {
            return 0;
        } else if (a < b){
            return -1;
        } else {
            return 1;
        }
    } else {
        return diff;
    }
}

names.sort(compareLengthBreakTie);
console.log(names);

// to use anon. functions for function parameters
names.sort(function(a,b){
    return a.length - b.length
});