// Day 6: Arrays.

// ACTIVITY - 1 Array Creation and Access.
// Task:1 Create an array of number from 1 to 5 and log the array to the console.
const array1 = [1, 2, 3, 4, 5];
console.log(`The array is ${array1}`);

// Task:2 Access the first and last elements of the array and log them to the console.
console.log(`The first element of the array is ${array1[0]}, and the last element is ${array1[array1.length - 1]}`);


// ACTIVITY - 2 Array Methods (Basic).
// Task:3 Use the 'push' method to add a new number to the end of the array and log the updated array.
array1.push(6);
console.log(`Updated array after add a new number to the end, ${array1}`);

// Task:4 Use the 'pop' method to remove the last element from the array and log the updated array.
array1.pop();
console.log(`Updated array after removing the element from last, ${array1}`);

// Task:5 Use the 'shift' method to remove the first element from the array and log the updated array.
array1.shift();
console.log(`Updated array after removing the element from first, ${array1}`);

// Task:6 Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.
array1.unshift(1);
console.log(`Updated array after add a new number to the beginning, ${array1}`);


// ACTIVITY - 3 Array Methods (Intermediate).
// Task:7 Use the 'map' method to create a new array where each number is double and log the new array.
console.log(`create a new array where each number is double, ${array1.map(ele => ele * 2)}`);

// Task:8 Use the 'filter' method to create a new array with event numbers and log the new array.
console.log(`create a new array with event numbers, ${array1.filter(ele => ele % 2 === 0)}`);

// Task:9 Use the 'reduce' method to calculate the sum of all numbers in the array and log the result.
console.log(`calculate the sum of all numbers, ${array1.reduce((acc, arr) => acc += arr, 0)}`);


// ACTIVITY - 3 Array Iteration.
// Task:10 Use a 'for' loop to iterate over the array and log each element to the console.
for (let i = 0; i < array1.length; i++) {
    console.log(`For loop iteration ${i + 1} is ${array1[i]}`);
}
