// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for(let i=0; i<array.length; i++) {
      for(let e=i+1; e<array.length; e++) {
        if(array[i] > array[e]) {
          let temp = array[i];
          array[i] = array[e];
          array[e] = temp;
        }
      }
    }
    return array;
  }
module.exports = insertionSort;