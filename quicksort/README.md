# Quick Sort Algorithm

## Beskrivelse af algoritmen

Quick Sort er en effektiv sorteringsalgoritme, der bruger en teknik kaldet "divide & conquer". 
Algoritmen vælger et element som en pivot og organiserer resten af elementerne omkring denne pivot, således at alle mindre elementer placeres til venstre og alle større til højre. 
Derefter gentager algoritmen processen rekursivt på de opdelte dele, indtil hele listen er sorteret.

## Quick Sort Pseudocode

**Quicksort** (A (array), low (int), high (int))  
&nbsp;&nbsp;&nbsp;&nbsp;if (low < high)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pivot = **Partition** (A, low, high)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quicksort (A, low, pivot)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quicksort (A, pivot + 1, high)  

**Partition** (A (array), low (int), high (int))  
&nbsp;&nbsp;&nbsp;&nbsp;pivot = A[high]  
&nbsp;&nbsp;&nbsp;&nbsp;i = low - 1  

&nbsp;&nbsp;&nbsp;&nbsp;for j = low to high - 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (A[j] < pivot) then  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i += 1  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap (A[i] with A[j])  

&nbsp;&nbsp;&nbsp;&nbsp;swap A[i + 1] with A[high]  
&nbsp;&nbsp;&nbsp;&nbsp;return i + 1  

## Tidskompleksitet (Big-O)

- **Gennemsnitlig tidskompleksitet**: \(O(n \log n)\). Quick Sort er generelt hurtig, fordi den halverer antallet af elementer, der skal sorteres, for hver iteration. Hver gang den deler listen op, bliver listen mindre, og processen gentages med mindre sektioner.

- **Værste tidskompleksitet**: \(O(n^2)\). Dette kan ske, hvis pivoten konsekvent vælges som det mindste eller største element, hvilket betyder, at algoritmen skal foretage mange unødvendige sammenligninger. 
Det kan undgås ved at vælge en god pivot, f.eks. en tilfældig eller den midterste værdi.

Quick Sort er ofte meget hurtigere end andre enkle sorteringsalgoritmer, da den normalt reducerer antallet af nødvendige sammenligninger.

## Links til ressourcer

Her er de links, der hjalp med forståelsen og implementeringen af Quick Sort:

- [Wikipedia - Quick Sort](https://en.wikipedia.org/wiki/Sorting_algorithm#Quicksort)
- [W3Schools - Quick Sort](https://www.w3schools.com/dsa/dsa_algo_quicksort.php)
- [YouTube Video - Quick Sort Tutorial](https://www.youtube.com/watch?v=Hoixgm4-P4M)
