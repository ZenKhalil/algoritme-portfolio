
function binarySearch(search, values, compareFunc) {
    let min = 0;
    let max = values.length - 1;
    let iterations = 0;

  const compare = compareFunc || function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            if (a === b) return 0;
            return a < b ? -1 : 1;
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        } else {
            throw new Error('Incompatible types for comparison');
        }
    };

    while (min <= max) {
        iterations++;
        let middle = Math.floor((min + max) / 2);
        let c = compare(search, values[middle]);

        console.log(`min: ${min}\nmax: ${max}\nmiddle: ${middle}\nc: ${c}`);

        if (c === 0) {
            console.log(`Antal iterationer: ${iterations}`);
            return middle;
        } else if (c > 0) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    console.log(`Antal iterationer: ${iterations}`);
    return -1;
}

module.exports = binarySearch;