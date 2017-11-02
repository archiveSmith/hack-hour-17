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
  if (!Array.isArray(array)) return;

  // O(n) time
  let seen = {};
  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i] + '']) return array[i];
    seen[array[i] + ''] = true;
  }
  return;


  // O(1) space, more like O(2) in order not to mutate input
  // let arr = array.slice(0).sort((a,b) => a - b)
  // for (let i = 1; i < arr.length; i += 1) {
  //   if (arr[i] === arr[i - 1]) return arr[i];
  // }
  // return;
}

module.exports = repeatNumbers;
