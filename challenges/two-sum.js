/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum (arr, n) {
  const compliment = {};
  for (let i = 0; i < arr.length; i++) {
    if (compliment[arr[i]] !== undefined) {
      return true;
    } else {
      compliment[n - arr[i]] = i;
    }
  }

  return false;
}

module.exports = twoSum;
