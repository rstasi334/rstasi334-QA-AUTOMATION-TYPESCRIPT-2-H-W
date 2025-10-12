// Function that adds all elements of an array
function sumArray(arr) {
    // Convert all elements to numbers and sum them
    return arr.reduce((acc, val) => acc + Number(val), 0);
}

// Array of strings representing numbers
const stringArray = ["1", "2", "3", "4"];

// Array of numbers
const numberArray = [5, 6, 7, 8];

// Pass arrays to the function and print results
console.log("Sum of stringArray:", sumArray(stringArray));
console.log("Sum of numberArray:", sumArray(numberArray));
