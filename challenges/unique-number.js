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
  let storage = {};
  for (let i = 0; i < array.length; i += 1) {
    if (!storage[array[i]]) {
      storage[array[i]] = 0
    }
    storage[array[i]]++;
  }
  let answer;
  for (let item in storage) {
    if (storage[item] === 1) {
      answer = item;
    }
  }
  return answer;
}

module.exports = uniqueNumber;
