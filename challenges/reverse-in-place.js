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

// NEW w/ destructuring assignment

function reverseInPlace(array) {
	const len = array.length;
	const halfLen = Math.floor(len / 2);

	for (let i = 0; i < halfLen; i += 1) {
	  [array[i], array[len - 1 - i]] = [array[len - 1 - i], array[i]];
	}
	return array;
}


// OLD

// function reverseInPlace(array) {
//     if (!Array.isArray(array)) return;
//     let length = array.length;
//     let halfLength = Math.floor(array.length / 2);
//     for (let i = 0; i < halfLength; i++) {
//         let temp = array[i];
//         array[i] = array[length - 1 - i];
//         array[length - 1 - i] = temp;
//     }
//     return array;
// }

module.exports = reverseInPlace;
