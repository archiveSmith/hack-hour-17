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

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;

  // const combineBothArray = arr1.concat(arr2);
  //
  // return combineBothArray.sort((a, b) => a - b);

  const combineSortArray = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while(arr1.length && arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      combineSortArray.push(arr1.shift());
    } else {
      combineSortArray.push(arr2.shift());
    }
  }

  return combineSortArray;


}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
