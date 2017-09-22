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

// function reverseInPlace2(array) {
//   let arr = array;
//   [arr[0], arr[array.length - 1]] = [arr[array.length - 1], arr[0]]
//   let arrSegment = arr.slice(1, array.length - 1)
//   if (arrSegment.length === 1) {
//     return arr;
//   }
//   return reverseInPlace(arrSegment);
// }

function reverseInPlace(array) {
  const arr = [];
  for (let i = 1; i <= array.length; i += 1) {
    arr.push(array[array.length - i]);
  }
  return arr;
}

module.exports = reverseInPlace;
