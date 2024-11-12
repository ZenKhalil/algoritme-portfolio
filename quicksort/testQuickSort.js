// Import the quickSort function from quickSort.js
const { quickSort } = require("./quickSort");

// Main code so we can test quick sort
let arr = [10, 7, 8, 9, 1, 5];
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
