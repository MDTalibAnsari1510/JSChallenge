// Day 7: Objects.

// ACTIVITY - 1 Object Creation and Access.
// Task:1 Create an object representing a book with properties like title, author and year and log the object to the console.
const book = {
    title: "JavaScript",
    author: "Brendan Eich",
    year: 1995
}
console.log(book);

// Task:2 Access and log the title and author properties of the book object.
console.log(`The title of book is ${book.title} and author is ${book.author}.`);


// ACTIVITY - 2 Object Methods.
// Task:3 Add a method to the book that returns a string with the book title, author and log the result of calling this method.
book.returnString = function () { return `The book title is ${this.title} and author is ${this.author}.` }

console.log(book.returnString());

// Task:4 Add a method to the book that takes parameter (year) and update the book's year property, then log the updated object.
book.updateYear = function (year) {
    this.year = year;
}
book.updateYear(2000);
console.log(`Updated Object: `, book);


// ACTIVITY - 3 Nested Objects.
// Task:5 Create a nested object representing a library with properties like name, book (an array of book objects), and log the library object to the console.
const library = {
    name: "Programming BookBar",
    books: [
        {
            title: "JavaScript",
            author: "Brendan Eich",
            year: 1995
        },
        {
            title: "Java",
            author: "James Gosling",
            year: 1995
        }
    ]
}
console.log(library);

// Task:6 Access and log the name of the library and title the title of all the books in the library.
console.log(`The name of Library: ${library.name}`);
library.books.forEach((ele, i) => console.log(`${i + 1} book title is ${ele.title}`));


// ACTIVITY - 4 The 'this' Keyword.
// Task:7 Add a method to the book object that uses the 'this' kayword to return a string with the book's title and year , and log the result of calling this method.
book.returnTitleAndYear = function () { return `The Book title: ${this.title}, and year: ${this.year}.` }
console.log(book.returnTitleAndYear());


// ACTIVITY - 5 Object Iteration.
// Task:8 Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
for (const key in book) {
    console.log(`The book property: ${key} and value: ${book[key]}`);
}

// Task:9 Use a 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.
console.log(`All keys: `,Object.keys(book));
console.log(`All values: `,Object.values(library));