// Day 8: ES6+ Features.

// ACTIVITY - 1 Template Literals
// Task:1 Use template literals create a string that includes variables for a person's name and age and log the string to the console.
const person = {
    name: "MD Talib Ansari",
    age: 24
}
console.log(`Hi ${person.name}, \nI hope your are doing well, your agr is ${person.age}`);

// Task:2 Create a multi-line string ussing template literals.
console.log(`\nThere are a lot of problems with your code.\n\t1. You ask for input on a book, but don't use a switch or if statement to use that input. You will always print all three outputs, regardless of what the user inputs.\n\t2. You have a constructor for the Book object with two parameters, but when you call the constructor with Book b1 = new Book(1) you only use one. This will give an error unless you have a constructor with only one parameter.\n\t3. In your SetPrice function, you are shadowing your object's variables, which menas the local copy of Price will get the new value, not the object's copy of Price.\nThere are more but this will get you started.\n`);


// ACTIVITY - 2 Destructuring
// Task:3 Use Array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [1, 2, 3, 4, 5];
const [firstElement, secondElement] = arr;
console.log(`First Element : ${firstElement}, Second Element: ${secondElement}.`);

// Task:4 Use Object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "JavaScript",
    author: "Brendan Eich",
    year: 1995
}
const { title, author } = book;
console.log(`\nTitle of book: ${title} and author: ${author}.`);


// ACTIVITY - 3 Spread And Rest Operators
// Task:5 Use the spread operator to create a new array that includes all elemnents an existing array plus addition elements, and log the new array to the console.
const newArr = [...arr, 6, 7, 8, 9];
console.log(`\nMerge two array and add somemore element in new array: ${newArr}.`);

// Task:6 Use the rest operator in a function to accept an arbitrary number of arguments, Sum them and return the result.
function sumOfAllArguments(...num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
console.log(`\nSum of all argument: ${sumOfAllArguments(1, 2, 3, 4, 5, 6)}`);


// ACTIVITY - 4 Default Parameters
// Task:7 Write a function that takes two parameters and return their product, with the second parameter a default value of 1 log the result of calling this function with and without the second parameter.
function productOfParams(pro1, pro2 = 1) {
    return pro1 * pro2;
}
console.log(`\nThe Product of two params: ${productOfParams(2)}`);


// ACTIVITY - 4 Enhance Object Literals
// Task:8 Use enhace object literals to create an object with method and propeties, and log the object to the console.