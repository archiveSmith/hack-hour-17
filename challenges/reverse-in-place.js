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
    //edge cases
    if (!Array.isArray(array)) return undefined;
    if (array.length === 0) return [];
    //reverse from last index
        //destructuring
    let length = array.length;
    for(let left = 0; left < length/2; left++){
        let right = length - 1 - left;
        [array[left], array[right]] = [array[right], array[left]];
    }
    return array;
}

// console.log(reverseInPlace(['a','b','c','d','e']));

module.exports = reverseInPlace;
