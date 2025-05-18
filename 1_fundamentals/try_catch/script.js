// Define a try-catch block
function divideTwoNums(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        // Log the error message
        console.log(`Could not divide ${b} by ${a}: ${error}`)
    }
}

console.log(divideTwoNums(10, 2));
console.log(divideTwoNums(10, 0));
