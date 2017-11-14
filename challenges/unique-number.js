/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const holder = {};
  for (let i = 0; i < array.length; i += 1) {
    if (holder[array[i]]) {
      delete holder[array[i]];
    } else {
      holder[array[i]] = true;
    }
  }
  return Object.keys(holder)[0];
}
// console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
