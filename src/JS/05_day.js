// Day 4: Functions.

// ACTIVITY - 1 Function Declaration.
// Task:1 Write a function to check if a number is even or odd nd log the result to the console.
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}
checkEvenOdd(2);

// Task:2 Write a function to calculate the square of a number and return the result.
function numberSquare(num) {
    return num * num;
}
console.log(`The square of the number is ${numberSquare(9)}`);
