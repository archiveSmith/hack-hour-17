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
  let num = 0;
  for(let i in array) { 
    num += array[i] - i;
  }
  return num;
}

// console.log(repeatNumbers([1,2,3,4,5,2]));

module.exports = repeatNumbers;
