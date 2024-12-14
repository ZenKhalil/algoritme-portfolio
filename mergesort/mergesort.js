// Global counters for tracking iterations
let mergeSortCalls = 0;
let mergeLoops = 0;

function merge(arrA, arrB) {
  const merged = [];
  let i = 0;
  let j = 0;

  // Compare og merge elementer
  while (i < arrA.length && j < arrB.length) {
    mergeLoops++;
    if (arrA[i] <= arrB[j]) {
      merged.push(arrA[i]);
      i++;
    } else {
      merged.push(arrB[j]);
      j++;
    }
  }

  // Tilføje resterende elementer fra arrA
  while (i < arrA.length) {
    mergeLoops++;
    merged.push(arrA[i]);
    i++;
  }

  // Tilføj resterende elementer fra arrB
  while (j < arrB.length) {
    mergeLoops++;
    merged.push(arrB[j]);
    j++;
  }

  return merged;
}

function mergeSort(arr) {
  // Increment call counter
  mergeSortCalls++;

  console.group("mergeSort called with:", arr);

  if (arr.length <= 1) {
    console.log("Base case reached, returning:", arr);
    console.groupEnd();
    return arr;
  }

  // Find middlepunktet
  const mid = Math.floor(arr.length / 2);

  // Del array til to dele
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  console.log("Split into:", "Left:", left, "Right:", right);

  // Recursive sorte begge halve
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Kombi sorteret halve
  const result = merge(sortedLeft, sortedRight);

  console.log("Merged result:", result);
  console.groupEnd();

  return result;
}

// Nulstil counters
function resetCounters() {
  mergeSortCalls = 0;
  mergeLoops = 0;
}

// Funktion til at kører mergeSort of fremvise statistikerne
function runMergeSort(arr) {
  resetCounters();
  console.log("Starting merge sort with array:", arr);

  const sortedArray = mergeSort(arr);

  console.log("Final sorted array:", sortedArray);
  console.log("Statistics:");
  console.log("- Number of mergeSort calls:", mergeSortCalls);
  console.log("- Number of merge loops:", mergeLoops);

  return sortedArray;
}
