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
    if (!Array.isArray(arr1) || !Array.isArray(arr1)) return 'error'; 
    //concat arrays
    let arr3 = arr1.concat(arr2);
    if(arr3.some(isNaN)) return 'invalid input';
    //sort array
    return arr3.sort((x, y) => x - y);
    //radix sort?
}

module.exports = mergeArrays;

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array)); //-> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]