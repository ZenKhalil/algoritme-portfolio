export function insertionSortShift(array) {
  let iterations = 0;
  for (let i = 1; i < array.length; i++) {
    iterations++; // Den inkrementerer for hver iteration af det ydre loop
    let key = array[i];
    let j = i - 1;

    console.group(`Shift - Ydre loop - i=${i}`);
    console.log(`Key-værdi: ${key}`);

    // Den skubber elementer der er størrere end key én position til højre
    while (j >= 0 && array[j] > key) {
      iterations++; // Den inkrementerer for hver iteration af det indre loop
      console.group(`Shift - Indre loop - j=${j}`);
      array[j + 1] = array[j];
      console.log(
        `Skubber ${array[j]} fra position ${j} til position ${j + 1}`
      );
      j = j - 1;
      console.groupEnd();
    }

    array[j + 1] = key;
    console.log(`Indsætter key-værdi ${key} på position ${j + 1}`);
    console.groupEnd();
  }
  console.log(`Shift - Antal iterationer: ${iterations}`);
  return array;
}

export function insertionSortSwap(array) {
  let iterations = 0;

  // En hjælpe funktion til at bytte to elementer i arrayet
  function swap(indexA, indexB) {
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
    console.log(`Bytter ${array[indexB]} og ${array[indexA]}`);
  }

  for (let i = 1; i < array.length; i++) {
    iterations++; // her tæller den hver gang det ydre loop kører
    console.group(`Swap - Ydre loop - i=${i}`);
    console.log(`Aktuel værdi: ${array[i]}`);

    let j = i;
    // Indre loop: her har vi Swap elementer, hvis de er i forkert rækkefølge
    while (j > 0 && array[j - 1] > array[j]) {
      iterations++; // Den tæller hver gang det indre loop kører
      console.group(`Swap - Indre loop - j=${j}`);
      swap(j - 1, j);
      j--;
      console.groupEnd();
    }

    console.groupEnd();
  }

  console.log(`Swap - Antal iterationer: ${iterations}`);
  return array;
}
