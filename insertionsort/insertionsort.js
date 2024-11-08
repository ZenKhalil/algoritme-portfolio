export function insertionSortShift(array) {
  let iterations = 0;
  for (let i = 1; i < array.length; i++) {
    iterations++; // Inkrementerer for hver iteration af det ydre loop
    let key = array[i];
    let j = i - 1;

    console.group(`Ydre loop - i=${i}`);
    console.log(`Key-værdi: ${key}`);

    // Skubber elementer større end key én position til højre
    while (j >= 0 && array[j] > key) {
      iterations++; // Inkrementerer for hver iteration af det indre loop
      console.group(`Indre loop - j=${j}`);
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
  console.log(`Antal iterationer: ${iterations}`);
  return array;
}
