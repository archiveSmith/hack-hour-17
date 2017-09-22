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

// idea is to go to the half of array and swap last with thoose at beggining
function reverseInPlace(array) {
    let len = array.length;
    let halfOfArray = Math.floor(len / 2);

    for (let i = 0; i < halfOfArray; i += 1) {
        // let temp = array[i];
        // array[i] = array [len - 1 - i];
        // array[len - 1 - i] = temp;

        //using es6 way for swapping 
        [array[i], array[len - 1 - i]] = [array[len - 1 - i], array[i]]
    }
    return array;
}

module.exports = reverseInPlace;
