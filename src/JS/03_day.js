// Day 3: Control Structures.

// ACTIVITY - 1 If-Else  Statements.
// Task:1 write a program to check if number is positive, negative or zero and log the result to the console.

const num = -1;
if (num === 0) {
    console.log('The number is zero.');
} else if (num > 0) {
    console.log('The number is Positive.');
} else {
    console.log('The number is Negative');
}

// Task:2 write a program to check if a person is eligible to vote (age >=18) and log the result to the console.
const age = 19;
if (age >= 18) {
    console.log(`Person is eligible to vote, His age is ${age}.`);
} else {
    console.log(`Person is not eligible to vote, His age is ${age}.`);
}


// ACTIVITY - 2 Nested If-Else  Statements.
// Task:3 write a program to find  the largest of three numbers using nested if-else statements.
const num1 = 40;
const num2 = 50;
const num3 = 30;
if (num1 > num2) {
    if (num1 > num3) {
        console.log(`The largest number is ${num1}`);
    } else {
        console.log(`The largest number is ${num3}`);
    }
} else if (num2 > num1) {
    if (num2 > num3) {
        console.log(`The largest number is ${num2}`);
    } else {
        console.log(`The largest number is ${num3}`);
    }
}


// ACTIVITY - 3 Switch Case.
// Task:4 write a program that  uses a switch case to determine the day of the week based on number (1-7) and log the day name to he console.

const day = 7;
switch (day) {
    case 1: console.log('Sunday'); break;
    case 2: console.log('Monday'); break;
    case 3: console.log('Tuesday'); break;
    case 4: console.log('Wednesday'); break;
    case 5: console.log('Thursday'); break;
    case 6: console.log('Friday'); break;
    case 7: console.log('Saturday'); break;
    default: console.log('Please enter the correct value.');
}

// Task:5 write a program that  uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to he console.
const score = 50;
let grade = '';
switch (true) {
    case score > 85:
        grade = 'A';
        break;
    case score > 65:
        grade = 'B';
        break;
    case score > 45:
        grade = 'C';
        break;
    case score > 33:
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}
console.log(`Score: ${score} and Grade: ${grade}`);


// ACTIVITY - 4 Conditional (Ternary) Operator.
// Task:6 write a program that  uses ternary operator to check if a number is even or odd and log the result to the console.

const number = 10;
const numIs = number % 2 === 0 ? `${number} is even` : `${number} is odd`;
console.log(numIs);


// ACTIVITY - 5 Combining Conditions.
// Task:7 write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const year = 1900;
if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log('The year is leap year');
} else {
    console.log('The year is not leap year');
}