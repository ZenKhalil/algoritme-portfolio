// Swap function to swap two elements in an array
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Partition function
function partition(arr, low, high) {
  let pivot = arr[high]; // Here we choose the last element as the pivot
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  // Here we move the pivot to the correct position
  swap(arr, i + 1, high);
  return i + 1;
}

// Quick Sort function
function quickSort(arr, low, high) {
  if (low < high) {
    // We find the pivot position
    let pivotIndex = partition(arr, low, high);

    // Recursively sort elements before and after pivot
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

// Export the functions so they can be used in other files
module.exports = { quickSort };


