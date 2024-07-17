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
checkEvenOdd(10);

// Task:2 Write a function to calculate the square of a number and return the result.
function numberSquare(num) {
    return num * num;
}
console.log(`The square of the number is ${numberSquare(9)}`);


// ACTIVITY - 2 Function Expression.
// Task:3 Write a function expression to find the maximum of two numbers and the result to the console.
const maxNumber = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else {
        console.log(`${num2} is greater than ${num1}`);
    }
}
maxNumber(30, 20);

// Task:4 Write a function expression to concatenate two string and return the result.
const concatenateString = function (str1, str2) {
    return str1 + str2;
}
console.log(`Concatenated two string is ${concatenateString('Talib ', 'Ansari')}.`);


// ACTIVITY - 3 Arrow Function.
// Task:5 Write an arrow function to calculate the sum of two numbers and return the result.
const sumOfTwoNumber = (num1, num2) => num1 + num2;
console.log(`Sum of two number is ${sumOfTwoNumber(30, 40)}`);

// Task:6 Write an arrow function to check if a string contains a specific characters and return a boolean value.
const isSpecificCharInString = (str) => {
    for (let i = 0; i < str.length; i++) {
        const element = array[i];
        if (str[i] === '~' || str[i] === '`' || str[i] === '!' || str[i] === '@' || str[i] === '#' || str[i] === '$' || str[i] === '%' || str[i] === '^' || str[i] === '&' || str[i] === '*' || str[i] === '(' || str[i] === ')' || str[i] === '-' || str[i] === '_' || str[i] === '+' || str[i] === '=' || str[i] === '{' || str[i] === '}' || str[i] === '[' || str[i] === ']' || str[i] === '|' ||/*str[i]=== "\" ||*/str[i] === '/' || str[i] === ':' || str[i] === ';' || str[i] === '"' || str[i] === "'" || str[i] === '<' || str[i] === '>' || str[i] === ',' || str[i] === '.' || str[i] === '?') return 
        
    }
}


