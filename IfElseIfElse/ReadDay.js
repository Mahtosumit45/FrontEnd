const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

rl.question("Enter a number (0-6) to get the corresponding weekday: ", (input) => {
    const num = parseInt(input, 10);
    if (num >= 0 && num <= 6) {
        console.log("Weekday:", weekDays[num]);
    } else {
        console.log("Please enter a valid number between 0 and 6.");
    }
    rl.close();
});
