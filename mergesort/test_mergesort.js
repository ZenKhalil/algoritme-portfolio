const testArray1 = [64, 34, 25, 12, 22, 11, 90];
const testArray2 = [5, 2, 8, 1, 9];
const testArray3 = [3];
const testArray4 = [];

console.log("Test 1: Standard array");
runMergeSort(testArray1);

console.log("\nTest 2: Small array");
runMergeSort(testArray2);

console.log("\nTest 3: Single element array");
runMergeSort(testArray3);

console.log("\nTest 4: Empty array");
runMergeSort(testArray4);
