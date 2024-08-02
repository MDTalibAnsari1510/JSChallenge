// Day 5: Functions.

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

// Task:6 Write an arrow function to check if a string contains a specific character and return a boolean value.
const isSpecificCharInString = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        // if (str[i] === '~' || str[i] === '`' || str[i] === '!' || str[i] === '@' || str[i] === '#' || str[i] === '$' || str[i] === '%' || str[i] === '^' || str[i] === '&' || str[i] === '*' || str[i] === '(' || str[i] === ')' || str[i] === '-' || str[i] === '_' || str[i] === '+' || str[i] === '=' || str[i] === '{' || str[i] === '}' || str[i] === '[' || str[i] === ']' || str[i] === '|' ||/*str[i]=== "\" ||*/str[i] === '/' || str[i] === ':' || str[i] === ';' || str[i] === '"' || str[i] === "'" || str[i] === '<' || str[i] === '>' || str[i] === ',' || str[i] === '.' || str[i] === '?')
        //     return true
        if (str[i] === char) return true;
        return false;
    }
}
console.log(`String Contains a specific character ${isSpecificCharInString('talib', 'z')}`);


// ACTIVITY - 4 Function Parameters and Default Values.
// Task:7 Write a function that takes two parameters and returns their product. Provide a default value for second parameter.
function productOfTwoValue(num1, num2 = 0) {
    return num1 + num2;
}
console.log(`The product of two values is ${productOfTwoValue(10)}`);

// Task:8 Write a function that takes a person's name and age and return a greeting message. Provide the default value for the age.
function greetingMessage(person, age = 18){
    return `Hi ${person}, \nI hope you are well.\nHappiest your ${age} Birthday.`
}
console.log(`${greetingMessage('Talib',10)}`);


// ACTIVITY - 5 Higher-Order Functions.
// Task:9 Write a higher-order function that takes a function and return a number, and calls the function that many times.

// Task:10 Write a higher-order function that takes two functions and value , applies the first funtion to the value, and then applies the second function to the result.
function higherOrder(fun1, fun2, val) {
    
}