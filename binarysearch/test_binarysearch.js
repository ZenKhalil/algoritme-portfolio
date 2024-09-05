import binarySearch from '.binarySearch/binarysearch.js'; 

const values = [21, 22, 23, 25, 27, 29, 31, 32, 34, 35];

// Test en numerisk søgning
let index = binarySearch(28, values);
console.log(`Fundet 28 på index ${index}`); 

// Test en strengsøgning 
let indexString = binarySearch('apple', ['apple', 'banana', 'cherry']);
console.log(`Fundet 'apple' på index ${indexString}`); 