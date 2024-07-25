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
