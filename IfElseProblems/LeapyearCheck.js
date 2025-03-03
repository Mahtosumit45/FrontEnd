// Get command-line arguments
const args = process.argv.slice(2);

// Ensure correct number of arguments
if (args.length !== 1) {
    console.log("Usage: node filename.js <year>");
    process.exit(1);
}

// Parse year as a number
const year = parseInt(args[0], 10);

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year < 1000 || year > 9999) {
        console.log("Please enter a valid 4-digit year.");
        return;
    }
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log(isLeap ? "Leap Year" : "Not a Leap Year");
}

// Output result
isLeapYear(year);
