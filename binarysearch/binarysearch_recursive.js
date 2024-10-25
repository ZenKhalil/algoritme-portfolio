// Global variabel til at holde styr på hvor mange gange vi har søgt
let binarySearchRecursiveIterations = 0;

/**
 * En rekursiv binary search funktion.
 * @param {*} search - Den værdi man leder efter
 * @param {Array} values - Det sorterede array, du søger i
 * @param {number} start - Startindekset for hvor vi skal begynde at søge
 * @param {number} end - Slutindekset for hvor vi skal stoppe med at søge
 * @param {Function} [comparator] - En valgfri funktion til at sammenligne elementer
 * @returns {number} - Indekset hvor vi fandt værdien, eller -1 hvis det ikke blev fundet
 */

function binarySearchRecursive(search, values, start, end, comparator) {
  console.group(`binarySearchRecursive kaldet med start=${start}, end=${end}`);

  // Tæl hvor mange gange vi har søgt
  binarySearchRecursiveIterations++;

  // Tjekker om vi stadig har noget at søge igennem
  if (start > end) {
    console.log(`Hov, kunne ikke finde ${search}.`);
    console.log(`Vi søgte igennem ${binarySearchRecursiveIterations} gange.`);
    console.groupEnd();
    return -1; // Det blev ikke fundet
  }

  // Find midterpunktet
  const middle = Math.floor((start + end) / 2);
  const middleValue = values[middle];

  // Sammenlign hvad vi leder efter med midterværdien
  let cmp;
  if (comparator && typeof comparator === "function") {
    cmp = comparator(search, middleValue);
  } else {
    // Standard sammenligning hvis vi ikke har en comparator
    if (search < middleValue) {
      cmp = -1;
    } else if (search > middleValue) {
      cmp = 1;
    } else {
      cmp = 0;
    }
  }

  if (cmp === 0) {
    // Vi fandt værdien!
    console.log(`Værdien ${search} blev fundet på indeks ${middle}.`);
    console.log(`Antal iterationer: ${binarySearchRecursiveIterations}`);
    console.groupEnd();
    return middle;
  } else if (cmp < 0) {
    // Vores søgning er til venstre side af midten
    const result = binarySearchRecursive(
      search,
      values,
      start,
      middle - 1,
      comparator
    );
    console.groupEnd();
    return result;
  } else {
    // Vores søgning er til højre side af midten
    const result = binarySearchRecursive(
      search,
      values,
      middle + 1,
      end,
      comparator
    );
    console.groupEnd();
    return result;
  }
}

// Eksporter funktionen, så den kan bruges i andre filer
if (typeof module !== 'undefined' && module.exports) {
  module.exports = binarySearchRecursive;
}
