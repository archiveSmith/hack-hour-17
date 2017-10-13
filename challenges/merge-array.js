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
    // let concatArr = arr1.concat(arr2);

    // concatArr.sort(function (a, b) {
    //     return a - b;
    // });

    // return concatArr;

    let pointer1 = 0;
    let pointer2 = 0;
    let arr = [];
    while (arr1[pointer1] !== undefined || arr2[pointer2] !== undefined) {
        if (arr1[pointer1] < arr2[pointer2]) {
            arr.push(arr1[pointer1++])
        } else if (arr1[pointer1] >= arr2[pointer2]) {
            arr.push(arr2[pointer2++])
        } else {
            arr.push(arr1[pointer1++]) || arr.push(arr2[pointer2++])
        }
    }
    return arr;
}

module.exports = mergeArrays;
