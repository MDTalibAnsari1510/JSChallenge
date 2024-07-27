// Day 14: Closures

// ACTIVITY - 1 Understanding Closures
// Task:1 Write a function that returns another functions, where the inner function accesses a variable from the ouer function scope. Call the inner funtion and log the result.
function outer() {
    let number = 50;
    return function inner() {
        return number++;
    }
}
const accessInner = outer();
console.log(`Access the outer function value inside the inner function`, accessInner());

// Task:2 Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
console.log(`Access the outer function value inside the inner function`, accessInner());


// ACTIVITY - 2 Practical Closures
// Task:3 Write a function that generate unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueIdGenerator() {
    let id = 56876;
    return function inner() {
        return `MTA-${id++}`;
    }
}
const uniqueId = uniqueIdGenerator();
console.log(`generated Unique ID: `, uniqueId());

// Task:4 Create a closure that captures a user's name and returns a function that greets the user by name.
function greets(name) {
    return () => {
        return `Hi ${name},\nGood Evening.`;
    }
}
console.log(greets('MD Talib')());


// ACTIVITY - 3 Closures in Loops
// Task:5 Write a loop