// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

const bubbleSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) [ array[j], array[j + 1] ] = [ array[j + 1], array[j] ];
    }
  }
  return array;
};

// console.log('[6, 5, 3, 1, 8, 7, 2, 4] -> [1, 2, 3, 4, 5, 6, 7, 8] ->', bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));

module.exports = bubbleSort;
