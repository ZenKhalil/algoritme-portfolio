const values = [21, 22, 23, 25, 27, 29, 31, 32, 34, 35];

function binarySearch(search, values, compareFunc) {
    let min = 0;
    let max = values.length - 1;
    let iterations = 0;
    let found = false;

    const compare = compareFunc || function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a === b ? 0 : a < b ? -1 : 1;
        } else if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        } else {
            throw new Error('Incompatible types for comparison');
        }
    };

    while (!found && min <= max) {
        iterations++;
        let middle = Math.floor((min + max) / 2);
        let c = compare(search, values[middle]);

        console.log(`min: ${min}\nmax: ${max}\nmiddle: ${middle}\nc: ${c}`);

        if (c === 0) {
            found = true;
            console.log(`Antal iterationer: ${iterations}`);
            return middle;
        }
        if (c > 0) {
            min = middle + 1;
        }
        if (c < 0) {
            max = middle - 1;
        }
    }

    console.log(`Antal iterationer: ${iterations}`);
    return -1;
}



/* Test kode
let index = binarySearch(28, values);
console.log(`Fundet 28 på index ${index}`);

let indexString = binarySearch('apple', ['apple', 'banana', 'cherry']);
console.log(`Fundet 'apple' på index ${indexString}`); */
