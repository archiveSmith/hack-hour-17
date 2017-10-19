/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if(!arr || !n || !Array.isArray(arr) || typeof n !== 'number' || arr.length < 2) return false;
  let cache = {};
  for(let i = 0; i < arr.length; i++){
    if(cache[arr[i]]) return true;
    let need = n - arr[i];
    cache[need] = true;
  }
  return false;
}

// console.log('[2,1,3,7], 5 -> true => ', twoSum([2,1,3,7], 5));
// console.log('[10, -2, -10, 20], 10 -> true => ', twoSum([10, -2, -10, 20], 10));
// console.log('[10], 10 -> false => ', twoSum([10], 10));
// console.log('[1,2,5], 20 -> false => ', twoSum([1,2,5], 20));

module.exports = twoSum;
