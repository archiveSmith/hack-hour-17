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

const mergeArrays = (arr1, arr2) => {
  // edge cases:
  if(!Array.isArray(arr1) || !Array.isArray(arr2)) return 0;
  if(!arr1 || !arr1.length) return arr2;
  if(!arr2 || !arr2.length) return arr1;
  // main challenge:
  let mergedArr = [];
  let cur1 = cur2 = 0;
  while(arr1[cur1] !== undefined || arr2[cur2] !== undefined) {
    if(arr1[cur1] === undefined) {
      let remArr = arr2.slice(cur2);
      mergedArr = mergedArr.concat(remArr);
      break;
    }
    if(arr2[cur2] === undefined) {
      let remArr = arr1.slice(cur1);
      mergedArr = mergedArr.concat(remArr);
      break;
    }
    if(arr1[cur1] <= arr2[cur2]) mergedArr.push(arr1[cur1++]);
    if(arr2[cur2] < arr1[cur1]) mergedArr.push(arr2[cur2++]);
  }
  
  return mergedArr;
};




// const mergeArrays = (arr1, arr2, currentPosition = 0) => {
//   console.log('running mergeArrays', arr1, arr2, currentPosition);
//   // edge cases:
//   if(!Array.isArray(arr1) || !Array.isArray(arr2)) return 0;
//   if(!arr1 || !arr1.length) return arr2;
//   if(!arr2 || !arr2.length) return arr1;
//   // main challenge:
//   if(arr1[currentPosition] < arr2[0]) {
//     currentPosition += 1;
//     arr1.splice(currentPosition,0,arr2[0]);
//   } else {
//     arr1.splice(currentPosition,0,arr2[0]);
//   }
//   arr2.shift();
//   console.log('new arr1: ', arr1);
//   console.log('new arr2: ', arr2);
//   console.log('new current position: ', currentPosition);
  
//   return mergeArrays(arr1, arr2, currentPosition);
// }

// let array1 = [1,3,5];
// let array2 = [2,4,6];
// console.log('mergeArrays(array1, array2): [1,2,3,4,5,6]', mergeArrays(array1, array2));
// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];
// console.log('mergeArrays: -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21] ==> ', mergeArrays(my_array, another_array));


module.exports = mergeArrays;
