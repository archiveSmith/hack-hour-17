// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;


  // for (let sortEnd = 0; sortEnd < array.length; sortEnd += 1) {
  //   for (let needToSort = sortEnd - 1; needToSort >=0; needToSort -= 1) {
  // //     //put conditional statement here to check? before sorting
  //     if (array[needToSort] > array[sortEnd]) {
  //       [array[needToSort], array[needToSort - 1]] = [array[needToSort - 1], array[needToSort]];
  //     }
  //   }
  // }
  // return array;
}

module.exports = insertionSort;

console.log(insertionSort([3,4,2,5,1]));