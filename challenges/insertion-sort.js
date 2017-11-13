// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (!Array.isArray(array)) return;
  if (array.length < 2) return array;
  let arr = array.slice(0);
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (arr[j] > arr[i]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

module.exports = insertionSort;
