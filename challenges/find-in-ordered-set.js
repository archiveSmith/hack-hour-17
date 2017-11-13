/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

<<<<<<< HEAD
function findInOrderedSet (arr, target) {
  // let length = arr.length / 2;
  // let center = Math.round(arr.length / 2);
  // while (center >= 0 && center < arr.length) {
  //   let checkVal = arr[center - 1];
  //   console.log('val', checkVal, target);
  //   length = length / 2;
  //   console.log('length', length);
  //   if (checkVal === target) { return true; }
  //   (checkVal > target) ? center -= Math.round(length) : center += Math.round(length);
  // }
  // return false;
  let sizeOfSubArr = arr.length;
  let index = Math.floor(arr.length / 2);
  while (sizeOfSubArr >= 1 && index >= 0 && index < arr.length) {
    sizeOfSubArr = Math.floor(sizeOfSubArr / 2);
    if (arr[index] === target) { return true; }
    (arr[index] < target)
    ? index += Math.ceil(sizeOfSubArr / 2)
    : index -= Math.ceil(sizeOfSubArr / 2);
  }
  return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45, 58];
console.log(findInOrderedSet(nums, 5));  // -> true
console.log(findInOrderedSet(nums, 1));  // -> false
=======

function findInOrderedSet(arr, target) {

}

>>>>>>> 87470ee6239f47d2b6a75382d885a60a2fee3d4e

module.exports = findInOrderedSet;
