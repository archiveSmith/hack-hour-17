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
  let obj = {}, result;
  array.forEach(element => {
    if (obj[element]) result = element;
    else obj[element] = 1;
  })
  return result;
  console.log(obj)
}

console.log(repeatNumbers([1,5,4,3,2,5]));
module.exports = repeatNumbers;
