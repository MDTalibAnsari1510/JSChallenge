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
book.returnString = () => `The book title is ${this.title} and author is ${this.author}.`

console.log(book.returnString());

// Task:4 Add a method to the book that takes parameter (year) and update the book's year property, then log the updated object.
book.updateYear = function (year) {
    this.year = year;
}
book.updateYear(2000);
console.log(`Updated Object: `,book);


// ACTIVITY - 3 Nested Objects.
// Task:5 Create a nested object representing a library with properties like name, book (an array of book objects), and log the library object to the console.