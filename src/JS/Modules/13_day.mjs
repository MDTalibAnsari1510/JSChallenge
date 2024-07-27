// Day 13: Modules

// ACTIVITY - 1 Creating and exporting Modules
// Task:1 Create a module that export a function to add two numbers. Import and use this modulein another script. 
import { sum, person, multiplecation, division, substraction } from './exporting.mjs';
const ans = sum(2, 5);
console.log(`The sum of two number is: ${ans}`);

// Task:2 Create a module that export an object representing a person with properties and methods. Import and use this modulein another script. 
console.log(person.fullNameAndAge());


// ACTIVITY - 2 Named and Default Exports
// Task:3 Create a module that exports multiple functions using named exports. Import and use this function in another script.
const multipled = multiplecation(3, 6);
const divided = division(9, 2);
const subtract = substraction(6, 3);
console.log(`Multiplecations is: ${multipled}, Division is: ${divided}, Subtraction is:${subtract}, and Sum is: ${ans}.`);

// Task:4 Create a module that exports a single functions using default exports. Import and use this function in another script.
import checkLeapYear from './defaultExporting.mjs';
console.log(`Check the year is leap Year: ${checkLeapYear(1900)}`);


// ACTIVITY - 3 Importing Entire Modules
// Task:3 Create a module that export multiple constants and funtions. Import the entire module as an object in another script and use its properties.
import * as exporting from './exporting.mjs';
console.log(exporting)