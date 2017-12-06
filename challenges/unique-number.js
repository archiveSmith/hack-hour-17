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

 // 0 yields false
 // 1 yields true

 // [1,  2,  1,  3,  3]
 // 01  10  01  11  11

 function uniqueNumber(array) {
  let unique = 0;
  for(let i = 0; i < array.length; i++) {
    unique = unique ^ array[i];
  }
  return unique;
}

// Bitwise XOR ( ^ ) is a logical operation that outputs true only when inputs differ 

// XOR is communicative and associative -> order doesn't matter 

// XOR only works IF:
// 1) Elements are non-zero
// 2) Contains no more than 2 'unique' integers
// 3) The repeated integer occur in even numbers 

// By simply repeatedly using XOR on all the elements of the array, any duplicates naturally filter themselves out and finally I am left with the one non-repeated integer.

// 6 + 7 + 5 - 6 - 5 = 7
// 3 + 3 - 3 = 3

console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;