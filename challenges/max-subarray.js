/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!Array.isArray(arr)) return;
  let max = -Infinity;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = arr.length - 1; j > i; j -= 1) {
     let sum = arr.slice(i, j + 1).reduce((a, c) => a + c);
     if (sum > max) max = sum;
    }
  }
  return max;
}

module.exports = maxSubarray;
