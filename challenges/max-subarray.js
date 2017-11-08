/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(array) {
  const currentMax = 0;
  const max = 0;
  const maxInArr = Math.max(...arr);

  if (maxInArr <= 0) return maxInArr;

    for (var i = 0; i < array.length; i += 1) {
      currentMax = Math.max(0 , currentMax + array[i]);
      max = Math.max(max, currentMax);
    }
    return max;

}

module.exports = maxSubarray;
