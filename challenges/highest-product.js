/**
* Given an array of integers,
* find the highest product you can get from three of the integers.
*/

function merge(arr1, arr2) {
  const merged = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) merged.push(arr1.shift());
    else merged.push(arr2.shift());
  }
  return merged.concat(arr1, arr2);
}

// Tree sorting to separate array into sortable information
function mergeSort(array) {
  // base case
  if (array.length === 0 || array.length === 1) return array;
  // find middle of array
  const middle = Math.floor(array.length / 2);
  // split the array into two halves
  const arr1 = mergeSort(array.slice(0, middle));
  const arr2 = mergeSort(array.slice(middle, array.length));
  return merge(arr1, arr2);
}


function highestProduct(array) {
  // find the three largest numbers in the array
  const sorted = mergeSort(array);
  return (sorted[sorted.length - 1]) * (sorted[sorted.length - 2]) * (sorted[sorted.length - 3]);
}

module.exports = highestProduct;
