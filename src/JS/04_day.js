// Day 4: Loops.

// ACTIVITY - 1 For Loop.
// Task:1 write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// Task:2 Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++) {
    i == 1 ? console.log(`5 once is ${5 * i}.`) : console.log(`5 ${i}s are ${5 * i}.`);
}


// ACTIVITY - 2 While Loop.
// Task:3 write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let z = 1;
let sum = 0;
while (z <= 10) {
    sum += z;
    z++
}
console.log(`The sum of numbers from 1 to 10 is: ${sum}.`);

// Task:4 write a program to print numbers from 10 to 1 using a while loop.
let y = 10;
while (y > 0) {
    console.log(y)
    y--;
}


// ACTIVITY - 3 Do...While Loop.
// Task:5 write a program to print numbers from 1 to 5 using a do...while loop.
console.log(`Write a program to print numbers from 1 to 5 using a do...while loop.`);
let x = 1;
do {
    console.log(x);
    x++;
} while (x <= 5);

// Task:6 write a program to calculate the factorial of a numbers using a do...while loop.
console.log(`Write a program to calculate the factorial of a numbers using a do...while loop.`);
let no = 5;
let w = no;
let fact = 1;
do {
    fact *= w;
    w--;
} while (w > 1);
console.log(`The factorial of ${no} is: ${fact}.`);


// ACTIVITY - 4 Nested Loops.
// Task:7 write a program to print a pattern using nested for loop.
let star = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        star += `* `;
    }
    star += `\n`;
}
console.log(star);

