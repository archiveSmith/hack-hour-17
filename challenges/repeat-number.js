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
  // input array of numbers, one duplicate
  // output the duplicate
  // iterate and place in object
  const container = {};
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (container[num] === undefined) {
      container[num] = 1;
    } else {
      container[num] += 1;
    }
  }
  const keys = Object.keys(container);
  let max = keys[0];
  for (let i = 0; i < Object.keys(container).length; i++) {
    let key = keys[i];
    if (container[key] > container[max]) {
      max = key;
    }
  }
  return Number(max);
}
console.log(repeatNumbers([1,2,3,4,5,6,7,3]))

module.exports = repeatNumbers;
