/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  const maxInArr = Math.max(...arr);
  if (maxInArr <= 0) return maxInArr;

  const callback = (acc, val) => {
    let { currentSequence, max } = acc;
    currentSequence = Math.max(0, currentSequence + val);
    max = Math.max(currentSequence, max);
    return { currentSequence, max };
  };

  const accumulator = { currentSequence: 0, max: 0 };
  return arr.reduce(callback, accumulator).max;
};

module.exports = maxSubarray;

