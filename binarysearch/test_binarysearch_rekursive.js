const binarySearchRecursive = require("./binarySearchRecursive.js");

// Global variabel til at holde styr på hvor mange gange vi har søgt
let binarySearchRecursiveIterations = 0;

// Et sorteret array
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

// Værdien vi leder efter
const searchValue = 13;

// Nulstil tælleren før vi starter
binarySearchRecursiveIterations = 0;

// Kald funktionen og gem resultatet
const index = binarySearchRecursive(
  searchValue,
  sortedArray,
  0,
  sortedArray.length - 1
);

// Fortæl brugeren hvad resultatet er
if (index !== -1) {
  console.log(`Værdien findes på indeks: ${index}`);
} else {
  console.log(`Værdien blev ikke fundet i arrayet.`);
}
