// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function insertionSort(array) {
  const arr = array
  for (let i = 0; i < arr.length; i += 1) {
    // compare each index to all previous items in the array
    for (let toSort = i + 1;
      arr[toSort] < arr[i - 1];
      toSort -= 1) {
      const temp = arr[toSort - 1]
      arr[toSort - 1] = arr[toSort]
      arr[toSort] = temp
    }
  }
  return arr
}

// console.log(insertionSort([18, 12, 3, 9]))

module.exports = insertionSort
