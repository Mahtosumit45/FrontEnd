const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const placeValues = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore"
};

rl.question("Enter a number (1, 10, 100, 1000, etc.): ", (input) => {
    const num = parseInt(input, 10);
    if (placeValues[num]) {
        console.log("Place Value:", placeValues[num]);
    } else {
        console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
    }
    rl.close();
});