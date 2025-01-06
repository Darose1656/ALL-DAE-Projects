// Named Cnstant
const GREETING = "Welcome to the NS.js Script!";

// Conditional Statement
function checkNumber(num) {
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }
}

// Loops - WHILE and FOR
function demonstrateLoops(limit) {
    console.log("\nWHILE loop demonstration:");
    let i = 0;
    while (i < limit) {
        console.log(`WHILE Loop Count: ${i}`);
        i++;
    }

    console.log("\nFOR loop demonstration:");
    for (let j = 0; j < limit; j++) {
        console.log(`FOR Loop Count: ${j}`);
    }
}

// Function that accepts an argument
function greet(name) {
    console.log(`${GREETING} Hello, ${name}!`);
}

// Function that accepts multiple arguments and returns a variable
function addNumbers(a, b) {
    return a + b;
}

// Array Operations
function demonstrateArray() {
    const fruits = ["Apple", "Banana", "Cherry", "Date"];
    console.log("\nArray of Fruits:", fruits);

    // Accessing elements in an array
    console.log("First fruit:", fruits[0]);
    console.log("Last fruit:", fruits[fruits.length - 1]);

    // Iterating through the array
    console.log("\nIterating through fruits:");
    for (const fruit of fruits) {
        console.log(fruit);
    }
}

// Main Function to Call Everything
function main() {
    console.log(GREETING);

    // Conditional Statements
    checkNumber(5);
    checkNumber(-3);
    checkNumber(0);

    // Loops
    demonstrateLoops(3);

    // Functions
    greet("Dave");
    const sum = addNumbers(7, 8);
    console.log(`Sum of 7 and 8 is: ${sum}`);

    // Arrays
    demonstrateArray();
}

// Execute the main function
main();