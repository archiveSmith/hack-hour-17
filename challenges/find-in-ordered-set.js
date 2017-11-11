/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let initialLen = arr.length;

  arr.push(target);
  let mySet = new Set(arr);

console.log( initialLen, mySet.size)
  if (initialLen===mySet.size) return true;
  else return false;
}

//var nums = [1, 4, 6, 7, 9, 17, 45]
//console.log(findInOrderedSet(nums, 4)); // -> true
//findInOrderedSet(nums, 2); // -> false

module.exports = findInOrderedSet;
