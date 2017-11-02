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
  const cache = {};
  // traverse the array
  // cache each number
  for (let i = 0; i < array.length; i += 1) {
    if (cache[array[i]]) {
      console.log(cache);
      return array[i];
    }
    cache[array[i]] = 1;
  }
  return 'No repeat number';
}

console.log(repeatNumbers([1, 2, 3, 4, 5, 6, 7, 8, 2, 14, 21, 87]));

module.exports = repeatNumbers;
