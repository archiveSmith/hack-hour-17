/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

const maxSubarray = (arr, idx = 0, max = -Infinity) => {
  // if (idx > arr.length - 1) return max;
  // if(idx === 0 && arr.length === 1) return arr[0];
  // if (idx === 1 && arr.length === 2) return Math.max.apply(null, [arr[0], arr[0] + arr[1], arr[1]]);
  // if (idx === 0 && arr.length > 1) maxSubarray(arr, idx + 1, arr[idx]);
  // else {
  //   let total = arr[0];
  //   let cache = [];
  //   for (let prev = 0, cur = 1; cur <= idx; prev++ , cur++) {
  //     total += ;
  //     cache.push(prev + cur)
  //   }
  // }
}

module.exports = maxSubarray;
