// Day 12: Error Handling

// ACTIVITY - 1 Basic Error Handling with Try-Catch
// Task:1 Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError(params) {
    throw 'User is not define.'
}
async function handlingError() {
    try {
        throwError();
        console.log('Succesfully run.')
    } catch (error) {
        console.log('Throw Error', error)
    }
}
handlingError();

// Task:2 Create a function that divided two number and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(numerator, denominator) {
    if (denominator === 0) {
        throw 'Error throw: denominator should be greater then.';
    } else {
        return numerator / denominator;
    }
}
function handleErrorDivide() {
    try {
        const dividedValue = divide(4, 0);
        console.log('Divided Value is: ', dividedValue)
    } catch (error) {
        console.log(error)
    }
}
handleErrorDivide();


// ACTIVITY - 2 Finally Block
// Task:3 Write a script that includes try-catch block and a finally block. Log message in the try, catch, and finally blocks to observe the excution flow.
function handleTryCatchFinally() {
    try {
        const dividedValue = divide(4, 0);
        console.log(`Try block run successfully.`);
    } catch (error) {
        console.log(`Catch block run successfully.`);
    } finally {
        console.log(`finally block run successfully.`);
    }
}
handleTryCatchFinally();


// ACTIVITY - 3 Custom Error Objects
// Task:4 Create a custom error class that extends the built-in Error Class. Throw an intanceof of this custom error in a function and handle it using a try-catch.// CustomError class extending Error
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

function throwCustomError() {
    throw new CustomError('This is a custom error message.');
}

function handleCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.error('Caught a CustomError:', error.message);
            console.error(error.stack);
        } else {
            console.error('Caught an unexpected error:', error.message);
            console.error(error.stack);
        }
    }
}
handleCustomError();

// Task:5 Write a function that validates user input (e.g, checking if a string is not empty) and throws a custom error if the validator fails. Handle the custom error using try-catch block.
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new CustomError('Input must be a non-empty string.');
    }
}
// validateInput('');


// ACTIVITY - 4 Error Handling Promises
// Task:6 Create a promise that radomly resolves and rejects. use '.catch' to handle the rejection and log an appropriate message to the console.
const promise = () => {
    return new Promise((resolve, reject) => {
        const randomDelay = Math.random() * 3000;
        setTimeout(() => {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                resolve('Success!');
            } else {
                reject(new CustomError('Randomly failed!'));
            }
        }, randomDelay);
    })
}

promise().then(res => console.log(res)).catch(err => console.log(err));

// Task:7 Use try-catch within an async function to handle errors from a promise that radomly resolve or rejects and log the error the error message.
async function handlePromise() {
    try {
        const response = await promise();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
handlePromise();


// ACTIVITY - 5 Graceful Error Handling in Fetch
// Task:8 Use the fetch API to request from an invaild URL and handle the error using '.catch()'. Log an appropriate error message to the console.
const invalidUrl = 'https://jsonplaceholder.typicode.com/todos';
fetch(invalidUrl)
    .then(response => {
        if (!response.ok) {
            throw new CustomError('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Fetch Error:', error.message);
    });

// Task:9 Use the fetch API to request from an invaild URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function getUrlData(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("Result is: ", result);
    } catch (error) {
        console.log("error: ", error);
    }
}
getUrlData(invalidUrl);