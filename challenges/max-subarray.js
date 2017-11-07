/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(array) {
    var currentMax = 0;
    var max = 0;
    for (var i = 0; i < array.length; i += 1) {
      currentMax = Math.max(-infinity , currentMax + array[i]);
      max = Math.max(max, currentMax);
    }
    return max;

}

module.exports = maxSubarray;
