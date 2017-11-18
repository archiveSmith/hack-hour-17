// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(arr) {
  let swapped;
  const array = Array.from(arr);
  do {
    swapped = false;
    for (let i = 0, j = 1; i < array.length - 1; i += 1, j += 1) {
      if (array[i] > array[j]) {
        swapped = true;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  } while (swapped);
  return array;
}
module.exports = bubbleSort;
