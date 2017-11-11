/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet (arr, target) {
  let length = arr.length;
  let center = Math.floor(length / 2);
  while (length > 0) {
    let checkVal = arr[center];
    length = Math.ceil(length / 2) - 1;
    if (checkVal === target) { return true; }
    (checkVal > target) ? center -= length : center += length;
  }
  return false;
}

// var nums = [1, 4, 6, 7, 9, 17, 45, 56];
// console.log(findInOrderedSet(nums, 1));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false

module.exports = findInOrderedSet;
