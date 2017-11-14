/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//  // O(log n)
function findInOrderedSet (arr, target) {
  // if (!arr || !arr.length) return false;
  // let middle = Math.floor(arr.length / 2);
  // if (target === arr[middle]) return true;
  // if (target < arr[middle]) return findInOrderedSet(arr.slice(0, middle), target);
  // if (target > arr[middle]) return findInOrderedSet(arr.slice(middle + 1), target);
}

// // O(log n) time, O(1) space
// function findInOrderedSet (arr, target, middle = null) {
//   if (!arr || !arr.length) return false;
//   if (!middle) middle = Math.floor(arr.length / 2);
//   console.log('middle', middle);
//   if (target === arr[middle]) return true;
//   if (target < arr[middle]) return findInOrderedSet(arr, target, Math.floor(middle / 2));
//   if (target > arr[middle]) return findInOrderedSet(arr, target, Math.floor(arr.length - middle / 2));
// }

// console.log('4 => true =>', findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 4));
// console.log('2 => false =>', findInOrderedSet([1, 4, 6, 7, 9, 17, 45], 2));

module.exports = findInOrderedSet;
