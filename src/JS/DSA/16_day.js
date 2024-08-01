// Day 16: Recursion

// ACTIVITY - 1 Basic Recursion
// Task:1 Write a recursive functionto calculate the factorial of a number. Log the result for a few test cases.
function factorial(num) {
    if (num < 2) {
        return 1;
    }
    return num * factorial(num - 1);
}
const array = [5, 6, 7, 0, 1, 4]
for (let i = 0; i < array.length; i++) {
    console.log(`Factorial of ${array[i]} is ${factorial(array[i])}`);
}

// Task:2 Write a recursive functionto calculate the nth fibonacci number. Log the result for a few test cases.
function fibonacci(num, result = [0, 1], i = 3) {
    if (num == 1) {
        return result[num - 1]
    } else if (num == 2) {
        return result
    }
    result.push(result[result.length - 1] + result[result.length - 2]);
    if (i == num) {
        return result;
    }
    i++
    return fibonacci(num, result, i);
}

function fib(num) {
    if (num == 1) {
        return 0;
    } else if (num == 2) {
        return 1
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}
for (let i = 1; i < 5; i++) {
    console.log(fibonacci(i));
    console.log(fib(i));
}


// ACTIVITY - 2 Recursion With Arrays
// Task:3 Write a recursive function to find the sum of all elements in an array: Log the result for a few test cases.
function sumOfAllElements(arr, i = 0) {
    if (i >= arr.length) {
        return 0;
    }
    return arr[i] + sumOfAllElements(arr, i + 1)
}
console.log(`The sum of all element in an array: ${sumOfAllElements([1, 2, 3, 4, 5, 6, 7, 8, 9])}`);

// Task:4 Write a recursive function to find the maximum element in an array: Log the result for a few test cases.
function maxElement(arr, max = 0, i = 0) {
    if (i >= arr.length) {
        return max;
    }
    if (max < arr[i]) {
        max = arr[i];
    }
    return maxElement(arr, max, i + 1)
}

function findMax(arr, index = 0) {
    if (index === arr.length - 1) {
        return arr[index];
    }
    const maxOfRest = findMax(arr, index + 1);
    return arr[index] > maxOfRest ? arr[index] : maxOfRest;
}

console.log(`The maximum number from an array: ${maxElement([1, 20, 3, 4, 5, 6, 70, 8, 9])}`,);


// ACTIVITY - 3 String Manipulation with Recursion
// Task:5 Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str, revStr = '', i = str.length - 1) {
    if (i <= 0) {
        return revStr += str[i];
    }
    revStr += str[i];
    return reverseString(str, revStr, i - 1)
}

function reverseStrings(str, i = str.length - 1) {
    if (i < 0) {
        return '';
    }
    return str[i] + reverseStrings(str, i - 1);
}
console.log(`Reverse String: `, reverseString('Hello'));
console.log(`Reverse String: `, reverseStrings('Hello'));

// Task:6 Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str, i = str.length - 1, j = 0) {
    if (j >= i) {
        return true;
    }
    if (str[i] != str[j]) return false;
    return isPalindrome(str, i - 1, j + 1);
}
console.log(`Check String is palindrome: `, isPalindrome('man nam'));


// ACTIVITY - 4 Recursive Search
// Task:7 Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1
    }
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }

}
console.log("Search target using Binary Search: ", binarySearch([1, 2, 3, 4, 5, 6, 7], 7));

// Task:8 Write a recursive function to count occurrances of a target element in an array. Log the result for a few test cases.
function countTargetOccurrances(arr, target, i = 0) {
    if (i > arr.length) {
        return 0;
    }
    const counter = arr[i] === target ? 1 : 0;
    return counter + countTargetOccurrances(arr, target, i + 1);

}
console.log('Count occurrances of a target element', countTargetOccurrances([1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 1, 2, 3], 3))
// ACTIVITY - 5 Tree Traversal (Optional)
// Task:9 Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

// Task:10 Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

