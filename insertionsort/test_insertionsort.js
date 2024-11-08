import { insertionSortShift } from "./insertionsort.js";

const list = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
console.log("Før sortering:", list);
insertionSortShift(list);
console.log("Efter sortering:", list);
