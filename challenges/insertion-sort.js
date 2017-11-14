'use strict';
// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort (array) {
  if (!Array.isArray(array)) { return undefined; }
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j] < array[j - 1]; j -= 1) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
  }
  return array;
}

console.log(insertionSort([2, 3, 1, 4]));

module.exports = insertionSort;
