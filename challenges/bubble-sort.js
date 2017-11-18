// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array)) return;
  let arr = array.slice(0);
  let run = true;
  while (run) {
      run = false
      for (let i = 0; i < arr.length; i++) {
          if (arr[i + 1] !== undefined && arr[i] > arr[i + 1]) {
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              run = true
          }
      }
  }
  return arr;
}

module.exports = bubbleSort;
