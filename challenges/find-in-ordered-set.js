/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target) {
    if (arr.length === 0) return false;
    
    let i =  Math.floor(arr.length/2);
    
    if (arr[i] === target) return true;
    if (arr.length === 1) return false;
    
    if (arr[i] > target) {
      arr = arr.slice(0, i);
      } else {
        arr = arr.slice(i);
      }
       return findInOrderedSet(arr, target);
   }


module.exports = findInOrderedSet;
