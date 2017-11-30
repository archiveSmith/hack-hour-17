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

function mergeArrays(arr1, arr2) {
  
    // create a new array
    let newArr = [];
    // set the 2 pointers
    let ind1 = 0;
    let ind2 = 0;
  
    // check if each element in each array exists
    // if elem in arr1 < arr2 --> push elem in arr1 then increment the index
    // if the elem in arr1 >= arr2 --> push elem in arr2 then increment the index
    // if one of the elems in an array doesn't exist then continue pushing on existing array elem
    while(arr1[ind1] !== undefined || arr2[ind2] !== undefined) {
      if(arr1[ind1] < arr2[ind2]) {
        newArr.push(arr1[ind1++]);
      } else if (arr1[ind1] >= arr2[ind2]) {
        newArr.push(arr2[ind2++]);
      } else {
        newArr.push(arr1[ind1++]) || newArr.push(arr2[ind2++]);
      }
    }
  
    return newArr;
  }

module.exports = mergeArrays;



/* -----------------------------------------------------------------

SOLUTION
function mergeArrays(arr1, arr2) {
  
    // create a new array
    let newArr = [];
    // set the 2 pointers
    let ind1 = 0;
    let ind2 = 0;
  
    // check if each element in each array exists
    // if elem in arr1 < arr2 --> push elem in arr1 then increment the index
    // if the elem in arr1 >= arr2 --> push elem in arr2 then increment the index
    // if one of the elems in an array doesn't exist then continue pushing on existing array elem
    while(arr1[ind1] !== undefined || arr2[ind2] !== undefined) {
      if(arr1[ind1] < arr2[ind2]) {
        newArr.push(arr1[ind1++]);
      } else if (arr1[ind1] >= arr2[ind2]) {
        newArr.push(arr2[ind2++]);
      } else {
        newArr.push(arr1[ind1++]) || newArr.push(arr2[ind2++]);
      }
    }
  
    return newArr;
  }
  */