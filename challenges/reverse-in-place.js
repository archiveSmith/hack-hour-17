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
	if(!Array.isArray(array) || array.length <= 0) return;
	if(array.length === 1) return array;
	const middle = Math.floor(array.length / 2);
	const lastItem = array.length - 1;
	for(let cur = 0; cur < middle; cur++){
		let front = array[cur];
		let back = array[lastItem - cur];
		array[cur] = back;
		array[lastItem - cur] = front;
	}
	return array;
}

// ====
// TEST
// ====
// console.log('Sam ==> ', reverseInPlace(['m', 'a', 'S']));
// console.log('Sivahn ==> ', reverseInPlace(['n', 'h', 'a', 'v', 'i', 'S']));
// console.log('Brice ==> ', reverseInPlace(['e', 'c', 'i', 'r', 'B']));
// console.log('54321 ==> ', reverseInPlace(['1', '2', '3', '4', '5']));

module.exports = reverseInPlace;
