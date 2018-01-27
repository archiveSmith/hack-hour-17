"use strict";

/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

/**
 * 
 * @param {*} array
 * 
 * Pseduo Code
 * 
 * Function with array input
 * helper function to find mode
 *   iterate through array, store count in {}
 *   increase count if key seen again
 *   if (element) is > max, new max
 *   if (more than one mode), use max
 * use Math.floor in mean
 * if (mean === mode) return true 
 */
function modemean(array) {
  let maxFreq = 0;
  let maxMode = -Infinity;
  let sum = 0;

  array.reduce((obj, curr) => {
    sum += curr;
    obj[curr] ? ++obj[curr] : obj[curr] = 1;

    if (obj[curr] === maxFreq && obj[curr] > maxMode) {
      maxMode = curr;
    } else if (obj[curr] > maxFreq) {
      maxFreq = obj[curr];
      maxMode = curr;
    }
    return obj;
  }, {});

  return Math.floor(sum/array.length) === maxMode;
}

console.log(modemean([1, 2, 2, 3]));
console.log(modemean([1, 4, 5, 5, 6, 6]));

module.exports = modemean;
