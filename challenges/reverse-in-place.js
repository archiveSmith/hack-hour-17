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

// helper function to reverse string

function reverseStringIndex(string, size) {
  let newString = '';

  console.log(string.split(' '));

  for (let i = string.length - 1; i >= 0; i--) {
    if (!string[i] === ' ') {
      newString += string[i];
    }
  }

  return newString;
}
function reverseInPlace(array) {
  // convert the input array into string with a space with each element
  let string = array.join(' ');
  const size = array.length;
  console.log(string)
  // call the reverse string helper function
  let newString = reverseStringIndex(string, size);
  // console.log(newString);

  // get the return string function, and split back to array
  const newArray = newString.split(',');
  // console.log(newArray);
  // return the array
  return newArray;
}

console.log(reverseInPlace([41,51,991,21,18]));
// console.log(reverseInPlace(['hh','ee','ll','ll','o1']));
module.exports = reverseInPlace;
