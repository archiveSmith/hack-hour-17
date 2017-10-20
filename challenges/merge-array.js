/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
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
  let newArr = [];

  function compare() {
    // return arr with smaller index 0
    if (arr1[0] < arr2[0]) {
      return 'arr1';
    } else if (arr1[0] > arr2[0]) {
      return 'arr2';
    } else {
      if (arr1[0].length !== 0) {
        return 'arr1';
      } else {
        return 'arr2';
      }
    }
  }

  function addOne() {
    // compare
    // shift one from smaller arr
    // push to new arr
    if (compare() === 'arr1') {
      let element = arr1.shift();
      newArr.push(element);
    } else if (compare() === 'arr2'){
      let element = arr2.shift();
      newArr.push(element);
    }
  }

  while (arr1.length > 0 || arr2.length > 0) {
    addOne();
  }

  return newArr;
}

module.exports = mergeArrays;

// let arr1 = [3,4,6,10,11,15,21];
// let arr2 = [1,5,8,12,14,19];
// console.log(mergeArrays(arr1,arr2));
