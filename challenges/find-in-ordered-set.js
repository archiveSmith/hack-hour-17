/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let arrSub = Array.from(arr);
  let pos = arrSub.length; 
  while (pos !== 0) {
    pos = Math.floor(arrSub.length / 2);
    const num = arrSub[pos];
    if (num === target) return true;
    if (num < target) arrSub = arrSub.slice(pos + 1);
    if (num > target) arrSub = arrSub.slice(0, pos);
  }
  return false;
}

module.exports = findInOrderedSet;
