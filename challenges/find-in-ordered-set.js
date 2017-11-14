/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
<<<<<<< HEAD
  const mid = Math.floor(arr.length / 2);
  if (arr.length === 0) return false;
  if (target === arr[mid]) return true;
  if (target > arr[mid]) {
    const newArr = arr.splice(mid, arr.length - 1);
    return findInOrderedSet(newArr, target);
  }
  if (target < arr[mid]) {
    const newArr = arr.splice(0, mid);
    return findInOrderedSet(newArr, target);
  }
  return false;
=======

>>>>>>> 42fce4c7af781d1a07c0c9399440e3f3c6da45f3
}


module.exports = findInOrderedSet;
<<<<<<< HEAD

// let nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  // -> true
// console.log(findInOrderedSet(nums, 2));  // -> false
=======
>>>>>>> 42fce4c7af781d1a07c0c9399440e3f3c6da45f3
