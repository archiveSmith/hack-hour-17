/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let count = {};
  for (let x = 0; x < array.length; x++) {
    if (!count[array[x]]) {
      count[array[x]] = 1;
    } else {
      return array[x];
    }
  }  
}

module.exports = repeatNumbers;

// // Test
// console.log(repeatNumbers([1,2,3,4,2,5]));
