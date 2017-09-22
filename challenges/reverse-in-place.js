'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  // input array
  // output array reversed in place
  // iterate forwards and unshift
  // create a len variable to store the current length
  // increment i by 2 to account for appending items to same array with each iteration
  if (array.constructor !== Array) {
    return 'not an array';
  }
  let len = array.length;
  let originalLen = array.length;
  for (let i = 0; i < len; i+=2) {
    let num = array[i];
    array.unshift(num);
    len += 1;
  }
  // iterate backwards and splice one item
  for (let i = len-1; i >= originalLen; i--) {
    array.splice(i,1);
  }
  return array;
}
console.log(reverseInPlace([1,2,3,4,5,6,7]))
module.exports = reverseInPlace;
