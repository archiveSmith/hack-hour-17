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
  const mergedArr = [];
  for(let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
    if (i === arr1.length) {
      mergedArr.push(arr2[j]);
      j += 1;
    } else if (j === arr2.length) {
      mergedArr.push(arr1[i]);
      i += 1;
    } else 
      (arr1[i] < arr2[j]) ? 
        ( mergedArr.push(arr1[i]), i += 1) : 
        ( mergedArr.push(arr2[j]), j += 1)
  }

  return mergedArr;
}

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
