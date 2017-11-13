// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
  let sorted = false;
  let didsomething = true;

  while (sorted === false && didsomething === true) {
    didsomething = false;
    for (let x = 1; x < arr.length; x++) {
      if (arr[x] < arr[x - 1]) {
        let temp = arr[x];
        arr[x] = arr[x-1]
        arr[x-1] = temp;
        didsomething = true;
      }
      // console.log(arr, didsomething);
    }
    if (didsomething === false) {
      sorted = true;
    }
  }
  return arr;
}

module.exports = insertionSort;

// let array = [6,5,3,1,8,7,2,4]
// console.log(insertionSort(array));