/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


 function findInOrderedSet(arr, target) {
   let i = Math.floor(arr.length / 2);
   if (arr[i] === target) return true;
   if (arr.length < 3) return arr.indexOf(target) > -1;
   return target < arr[i] ? findInOrderedSet(arr.slice(0,i + 1), target) : findInOrderedSet(arr.slice(i + 1), target);
 }


module.exports = findInOrderedSet;
