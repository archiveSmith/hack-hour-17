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
    
// if array is empty, return array
// loop through array
// use array deconstruction to reassign left to right
// cannot use 'i' assignment; must use temporary assignments to null or else will repeat i

  let right = null; 
  let left = null;
  const length = array.length;

  for (left = 0; left < Math.floor(length / 2); left += 1) {
    right = length - 1 - left;
    [array[left], array[right]] = [array[right], array[left]];
  }
  return array;
}

module.exports = reverseInPlace;


const test = ['f', 'a', 'r', 'm'];
const test2 = ['c', 'a', 't'];
const test3 = [];
console.log(reverseInPlace(test));
console.log(reverseInPlace(test2));
console.log(reverseInPlace(test3));
