/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) {
    return arr1.concat(arr2);
  }
  let arr1Pos = 0;
  let arr2Pos = 0

  while (arr2.length > arr2Pos) {
    if (arr1[arr1Pos] < arr2[arr2Pos]) {
      arr1Pos += 1;
      continue;
    }
    arr1.splice(arr1Pos, 0, arr2[arr2Pos]);
    arr2Pos += 1;
  }
  return arr1;
}

module.exports = mergeArrays;
