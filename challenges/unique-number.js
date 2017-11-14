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
  let act = est = 0;
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    if (!cache[array[i]]) {
      est += array[i] * 2;
      cache[array[i]] = true;
    }
    act += array[i];
  }

  return est - act;
}

// console.log('2 ->', uniqueNumber([1, 2, 1, 3, 3]));
// console.log('4 ->', uniqueNumber([1, 2, 1, 2, 3, 3, 5, 4, 5]));

module.exports = uniqueNumber;
