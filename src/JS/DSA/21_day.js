// Day 21: LeetCode Easy

// ACTIVITY - 1 Two Sum
// Task:1 Solve the "Two Sum" Problem on LeetCode.
//      Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
//      Log the indices for a few test cases.
function twoSum(nums, target) {
    let numWithIndx = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if(numWithIndx[complement]){
        return [numWithIndx[complement], i]
      }
      numWithIndx[nums[i]] = i
    }
    return []
}

console.log('The two sum indices are: ', twoSum([1,2,3,4,5,6,7,8], 8))



// ACTIVITY - 2 Reverse Integer
// Task:2 Solve the "Reverse Integer" Problem on LeetCode.
//      Write a function that takes an integer and returns it with its digit reversed.
//      Handle edge cases like negative numbers and numbers ending in zero.
//      Log the reversed integer for a few test cases.

function reverseInteger(num) {
    let sum = 0;
    let negative = false;
    if(num<0) {
        negative = true;
        num = -num;
    }
    while(num>0) {
        let rem = num % 10;
        sum = (sum * 10) + rem;
        num = parseInt(num/10);
    }
    return negative ? -sum : sum;
}
console.log('The reverse integer number is: ', reverseInteger(-123251));

// ACTIVITY - 3 Palindrome Number
// Task:3 Solve the "Palindrome Number" Problem on LeetCode.
//      Write a function that takes an integer and returns true if it is palindrome, and false otherwise.
//      Log the result for a few test cases, including edge cases like nagative numbers.

function isPalindrome(num) {
    const originalNum = num;
    let sum = 0;
    while(num>0) {
        let rem = num % 10;
        sum = (sum * 10) + rem;
        num = parseInt(num/10);
    }
    return sum === originalNum;
}
console.log('The number is palindrome: ', isPalindrome(12321));

// ACTIVITY - 4 Merge Two Sorted Lists
// Task:4 Solve the "Merge Two Sorted Lists" Problem on LeetCode.
//      Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
//      Create a few test cases, with linked lists and log the merge list.


// ACTIVITY - 5 Valid Parantheses
// Task:5 Solve the "Valid Parantheses" Problem on LeetCode.
//      Write a function that takes string containing just the characters '(', ')', '{','}','[', and ']', and determines if the input sting is valid.
//      A string is valid if open brackets are closed in correct order.
//      Log the result for a few test cases.

// ACTIVITY - 6 Kadane’s Algorithm (Maximum Subarray Sum)
// Task:6 Solve the "Kadane’s Algorithm (Maximum Subarray Sum)" Problem on LeetCode.
//      Write a function that takes an array of integers and returns the maximum sum of a contiguous subarray.
//      Log the result for a few test cases.

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);

    }
    return maxSum;
}

console.log('The maximum subarray sum is: ', maxSubArray([1,-2,-3,4,-5,-6,7,-8,-9,-10]));

// ACTIVITY - 7 Move all zeros to the end of the array without changing the order of non-zero elements.

function moveZeroToEnd(arr) {
    let insertPos = 0;

    // Step 1: Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[insertPos] = arr[i];
            insertPos++;
        }
    }
    // Step 2: Fill the rest of the array with zeros
    while (insertPos < arr.length) {
        arr[insertPos] = 0;
        insertPos++;
    }
    return arr;
}
console.log('The array with zeros at the end is: ', moveZeroToEnd([1,0,2,0,3,0,4,0,5,0]));