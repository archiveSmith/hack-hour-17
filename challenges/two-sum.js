/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!Array.isArray(arr) || typeof n !== 'number' || arr.length < 2) return false;
  let array = arr.sort((a,b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
      if (array[left] + array[right] === n) return true;
      else if (array[left] + array[right] < n) left += 1;
      else right -= 1;
  }
  return false;
}

module.exports = twoSum;
