// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  if (!array) {
    return array;
  }
  
  let sorted = false;

  while (!sorted) {
    let didsomething = false;
    for (let x = 0; x < array.length - 1; x += 1) {
      if (array[x] > array[x+1]) {
        [array[x], array[x+1]] = [array[x+1], array[x]];
        didsomething = true;
      }
    }
    if (!didsomething) {
      sorted = true;
    }
  }
  return array;
}

module.exports = bubbleSort;

// tests
// let input = null;
// let input = [6,5,3,1,8,7,2,4];
// console.log(bubbleSort(input));