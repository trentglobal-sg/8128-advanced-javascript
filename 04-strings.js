let a = 'she sells seashell';
let b = "jack and jill went up the hill";

// we can open and close with double quotes and use single quote inside
console.log("she said that she didn't know anything");

// as long as we open and close with the same type of quotes, any characters
// go into the string
console.log('she said, "I do not know anything"');

// there's a way to tell the programming language that a character
// is to be taken literally (i.e part of the string, and not part of the programming)
// i.e, escape sequence - we start it by putting a \
console.log('She said, "I don\'t know anything"');

let filepath="C:\\Users\\nkx\\Documents\\8078_recipe_book.tags.json";
console.log(filepath);

// special escape sequence
// \n -> starts a new line
// \t -> tab character
console.log("Dear sir,\n\tYou owe $50 dollars.");

function calculateLateFees(fee) {
    if (fee > 100) {
        return fee * 1.1;
    } else {
        return fee * 1.03;
    }
}

// backtick strings aka string iterals
let name = "Tan Ah Kow";
let price = 100;
const letter = `Dear ${name},
        Our motto is "best customer service at any price".  But you must pay up in time.
You owe us ${calculateLateFees(price)} dollars, inclusive of ten percent late fees. 

`
console.log(letter);