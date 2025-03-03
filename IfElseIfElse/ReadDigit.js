const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numberToWord = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

rl.question("Enter a single digit number: ", (input) => {
    const num = parseInt(input, 10);
    if (num >= 0 && num <= 9) {
        console.log("Number in word:", numberToWord[num]);
    } else {
        console.log("Please enter a valid single digit number (0-9).");
    }
    rl.close();
});
