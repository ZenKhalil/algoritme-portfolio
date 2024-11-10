import { insertionSortShift, insertionSortSwap } from "./insertionsort.js";

const list1 = [5, 8, 2, 1, 0, 4, 3, 9, 7, 6];
const list2 = [...list1]; // Kopierer arrayet for at teste begge funktioner separat

console.log("Før Shift-sortering:", list1);
insertionSortShift(list1);
console.log("Efter Shift-sortering:", list1);

console.log("\n-----------------------------\n"); // for at adskille de to

console.log("Før Swap-sortering:", list2);
insertionSortSwap(list2);
console.log("Efter Swap-sortering:", list2);
