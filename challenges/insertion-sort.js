// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i - 1;
    let temp = array[i];

    while (j >= 0 && (array[j] > temp)) {
        array[j + 1] = array[j];
        j--;
    }
    array[j + 1] = temp;
}
return array;
}

module.exports = insertionSort;