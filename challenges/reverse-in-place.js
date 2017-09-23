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
<<<<<<< HEAD
    if (array === undefined || array.length === 0) {
      return [];
    } else if (Array.isArray(array) === false) {
      return undefined;
}

let i = 0;
let j = array.length - 1;

    while (i < j) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
        i++;
        j--;
    }
      return array;
=======
>>>>>>> f9ae9448c4d187e2e69072f41d660a7865c2e3e6

}

module.exports = reverseInPlace;
