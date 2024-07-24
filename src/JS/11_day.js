// Day 11: Promises and Async/Await

// ACTIVITY - 1 Undderstanding Promises
// Task:1 Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('My first promise resoved successfully.'), 2000);
});
promise.then(result => console.log(`Promise resolve message is: "${result}"`));

// Task:2 Create  apromise that reject with an error message after a 2-second timeout and handle the error using .catch().
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('My first promise rejected successfully.'), 2000);
});
promise2.catch(error => console.log(`Promise reject message is: "${error}"`));


// ACTIVITY - 2 Chaining Promises
// Task:3 Create a sequence of promises that simulate fetching data from server. chain the promises log message in a specific order.
// fetch(`https://jsonplaceholder.typicode.com/todos`)
//     .then(response => response.json()
//         .then(result => console.log(result))
//     )


// ACTIVITY - 3 Using Async/Await
// Task:4 Write an async funcation that waits for a promise to resolve and then logs the resolve value.
async function firstFun() {
    const message = await promise;
    console.log(message);
}
firstFun();

// Task:5 Write an async funcation that handle a rejected promise using try-catch and log the error message.
async function secFun() {
    try {
        const message = await promise2;
    } catch (error) {
        console.log(error)
    }
}
secFun();


// ACTIVITY - 4 Fetching Data from an API
// Task:6 Using fetch API to get data from a public API and log the response data to the console using promises.
// Task:7 Using fetch API to get data from a public API and log the response data to the console using Async/Await.
async function getUserDataFromPublicApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
// getUserDataFromPublicApi();


// ACTIVITY - 4 Concurrent Promises
// Task:8 Using 'Promise.all' to wait multiple promises to resolve and then log thier values.
Promise.all([promise, firstFun(), secFun()])
    .then(result => console.log('Promise All Result', result))
    .catch(error => console.log('Promise All Error', error));

// Task:9 Using 'Promise.race' to wait multiple promises to resolve and then log thier values.
Promise.race([promise, promise2, firstFun(), secFun()])
    .then(result => console.log('Promise Race Result', result))
    .catch(error => console.log('Promise Race Error', error));