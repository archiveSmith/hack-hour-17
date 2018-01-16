// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      countInner++;
      countSwap++;
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}
}

module.exports = insertionSort;