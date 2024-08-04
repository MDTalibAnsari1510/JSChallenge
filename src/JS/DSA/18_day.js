// Day 18: Algorithms

// ACTIVITY - 1 Sorting Algorithms
// Task:1 Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(array) {
    // Logic is: select max and swap that 
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log('Bubble Sort Array: ', bubbleSort([2, 5, 7, 3, 0, 1, 6]));

// Task:2 Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(array) {
    // Logic is: select min and swap that 
    for (let i = 0; i < array.length; i++) {
        let index = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[index]) {
                index = j;
            }
        }
        if (index !== i) {
            const temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }
    return array;
}
console.log('Selection Sort Array: ', selectionSort([2, 5, 7, 3, 0, 1, 6]));

// Task:3 Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        const pivotIndex = partition(array, low, high);
        quickSort(array, pivotIndex + 1, high);
        quickSort(array, low, pivotIndex - 1);
    }
    return array;
}

function partition(array, low, high) {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    const temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return i + 1;
}
console.log('Quick Sort Array: ', quickSort([2, 5, 7, 3, 0, 1, 6]));



// ACTIVITY - 2 Searching Algorithms
// Task:4 Implement the linear seach algorithm to find a target value in an array. Log the the index of the target value.
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}
console.log('Linear Search: ', linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 0));

// Task:5 Implement the binary seach algorithm to find a target value in n sorted array. Log the the index of the target value.
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) return mid;
        if (array[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1
}
console.log('Binary Search: ', binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));


// ACTIVITY - 3 String Algorithms
// Task:6 Write a function to count the occurences of each character in a string. Log the character counts.
function countOccurance(string) {
    const count = {};
    for (let i = 0; i < string.length; i++) {
        count[string[i]] = (count[string[i]] || 0) + 1;
    }
    return count;
}
console.log(`Occurence: `, countOccurance('Write a function to count the occurences of each character in a string. Log the character counts'));

// Task:7 Write a function to find the longest substring without repeating characters in a string count. Log the length of the substring.
function longestSubString(string) {
    let subString = '';
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        for (let j = 0; j < subString.length; j++) {
            if (subString[j] == element || element == ' ') {
                subString = '';
            }
        }
        subString += element;

    }
    return subString;
}
console.log(`Longest Sub-String: `, longestSubString(`Write a function to rotate an array by k place position. Log the rotated array.`))


// ACTIVITY - 4 Array Algorithms
// Task:8 Write a function to rotate an array by k place position. Log the rotated array.
function rotate(array, k) {
    const d = (k % array.length);
    if (d == 0 || array.length == 0) return array;
    const temp = [];
    for (let i = 0; i < d; i++) {
        temp[i] = array[i];
    }
    for (let i = 0; i < array.length - d; i++) {
        array[i] = array[i + d];
    }
    for (let i = 0; i < temp.length; i++) {
        array[array.length - temp.length + i] = temp[i];
    }
    return array;
}

console.log(`Rotated Array: `, rotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

function rotateWithTwoPointer(array, k) {
    const n = array.length;
    k = k % n;
    if (k === 0 || n === 0) return array;
    function reverse(start, end) {
        while (start < end) {
            const temp = array[start];
            array[start] = array[end];
            array[end] = temp;
            start++;
            end--;
        }
    }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
    return array;
}

console.log('Rotated Array:', rotateWithTwoPointer([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));

// Task:9 Write a function to merge two sorted arrays into a one sorted array. Log the merged array.
function mergeTwoSortedArray(array1, array2) {
    const newArray = [];
    let firstIndexStart = 0;
    let secondIndexStart = 0;
    let i = 0;
    while (firstIndexStart < array1.length && secondIndexStart < array2.length) {
        if (array1[firstIndexStart] < array2[secondIndexStart]) {
            newArray[i] = array1[firstIndexStart];
            firstIndexStart++;
        } else {
            newArray[i] = array2[secondIndexStart];
            secondIndexStart++;
        }
        i++;
    }
    while (firstIndexStart < array1.length) {
        newArray[i++] = array1[firstIndexStart++];
    }
    while (secondIndexStart < array2.length) {
        newArray[i++] = array2[secondIndexStart++];
    }
    return newArray;
}
console.log(`Merge Two sorted Array: `, mergeTwoSortedArray([1, 4, 5, 6, 9, 44, 45, 46, 47, 55, 66, 77, 88, 99, 666, 777, 888, 999], [2, 3, 4, 6, 8, 11, 22, 33, 44]))


// ACTIVITY - 5 Dynamic Programming (Optional)
// Task:10 Write a function to solve the fibonacci sequence using dynamic programming. Log the fibonacci numbers.
// Task:11 Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.