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
        throw 'denominator should be greater then.';
    } else {
        return numerator / denominator;
    }
}
function handleErrorDivide() {
    try {
        
    } catch (error) {
        olconsa
    }
}
