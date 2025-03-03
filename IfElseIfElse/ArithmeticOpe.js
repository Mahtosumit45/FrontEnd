const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter three numbers separated by space: ", (input) => {
    const [a, b, c] = input.split(" ").map(Number);
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Please enter valid numbers.");
        rl.close();
        return;
    }
    
    const operations = {
        "a + b * c": a + b * c,
        "a % b + c": a % b + c,
        "c + a / b": c + a / b,
        "a * b + c": a * b + c
    };
    
    const values = Object.values(operations);
    const max = Math.max(...values);
    const min = Math.min(...values);
    
    console.log("Results:", operations);
    console.log("Maximum Value:", max);
    console.log("Minimum Value:", min);
    
    rl.close();
});