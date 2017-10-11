/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var another_array = [1,5,8,12,14,19];
 * var my_array = [3,4,6,10,11,15,21];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 * ------------------PSUDOCODE------------------
 * concat 2 arrays
 * sort using helper function
 */

const mergeArrays = (arr1, arr2) => {
  return (arr1.concat(arr2)).sort(sortNumber);
}

const sortNumber = (a, b) => a - b;


module.exports = mergeArrays;
