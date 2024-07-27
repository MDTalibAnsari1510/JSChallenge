// Day 14: Closures

// ACTIVITY - 1 Understanding Closures
// Task:1 Write a function that returns another functions, where the inner function accesses a variable from the ouer function scope. Call the inner funtion and log the result.
function outer() {
    let number = 50;
    return function inner() {
        return number++;
    }
}
const accessInner = outer();
console.log(`Access the outer function value inside the inner function`, accessInner());

// Task:2 Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
console.log(`Access the outer function value inside the inner function`, accessInner());


// ACTIVITY - 2 Practical Closures
// Task:3 Write a function that generate unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueIdGenerator() {
    let id = 56876;
    return function inner() {
        return `MTA-${id++}`;
    }
}
const uniqueId = uniqueIdGenerator();
console.log(`generated Unique ID: `, uniqueId());

// Task:4 Create a closure that captures a user's name and returns a function that greets the user by name.
function greets(name) {
    return () => {
        return `Hi ${name},\nGood Evening.`;
    }
}
console.log(greets('MD Talib')());


// ACTIVITY - 3 Closures in Loops
// Task:5 Write a loop that creates an array of functions. Each function should logs its index when called. Use a closure to ensure each function logs the correct index.
function fun(arr) {
    for (let i = 0; i < 5; i++) {
        arr[i] = (function (index) {
            return function () {
                console.log(`Function at index ${index}`);
            };
        })(i);
    }
    return arr;
}
fun([]).forEach(element => element());


// ACTIVITY - 4 Module Pattern
// Task:6 Use closure to create a simple module for managing a collection of items. Implement method to add, remove, and list items.
function itemManagement() {
    const itemList = [];
    return {
        create: (data) => {
            itemList.push(data);
            console.log(`Item added successfully.`);
        },
        update: (id, data) => {
            if (itemList.length > 0) {
                const index = itemList.findIndex(ele => ele.id == id);
                if (index < 0) {
                    console.log(`Item not found ${id} this id`);
                } else {
                    for (const key in itemList[index]) {
                        if (data[key]) {
                            itemList[index][key] = data[key];
                        }
                    }
                }
            } else {
                console.log(`Item is not available.`)
            }
        },
        remove: (id) => {
            const index = itemList.findIndex(ele => ele.id == id);
            if (index < 0) {
                console.log(`Data Not found on ${id} id`);
            } else {
                itemList.splice(index, 1);
            }
        },
        list: () => {
            return itemList;
        }
    }
}

const crud = itemManagement();
crud.create({ id: 1, name: 'Laptop', rating: 4.5 });
crud.create({ id: 2, name: 'Mobile', rating: 4.5 });
crud.create({ id: 3, name: 'EarPhone', rating: 4 });
crud.create({ id: 4, name: 'EarBuds', rating: 2.5 });
crud.create({ id: 5, name: 'Bluetooth', rating: 3 });
console.log(`List of items`, crud.list());
crud.update(3, { name: 'Earphone' });
console.log(`List of items`, crud.list());
crud.remove(4);
console.log(`List of items`, crud.list());


// ACTIVITY - 5 Memoization
// Task:7 Write function that memoizes the result of another function. Use a closure to store the result of previous computations.
function memoizes() {
    const squareOfNumbres = {}
    return function squareCalculate(num) {
        if (squareOfNumbres[num]) {
            console.log(`From Cache`);
            return squareOfNumbres[num];
        } else {
            console.log(`Calculated`);
            return squareOfNumbres[num] = num * num;
        }
    }
}
const cal = memoizes();
console.log(cal(2));
console.log(cal(2));
console.log(cal(4));
console.log(cal(4));

// Task:8 Create a memoized version of a function that calculate the factorialof number.
function memoizedFact() {
    const calculatedFact = {}
    return function factorial(num) {
        if (calculatedFact[num]) {
            console.log(`From Cache`);
            return calculatedFact[num];
        } else {
            console.log(`Calculated`);
            let fact = 1
            for (let i = num; i > 0; i--) {
                fact *= i;
            }
            calculatedFact[num] = fact;
            return fact;
        }
    }
}
const fact = memoizedFact();
console.log(fact(2));
console.log(fact(2));
console.log(fact(4));
console.log(fact(4));