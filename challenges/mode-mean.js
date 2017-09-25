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

// Define a fuction call modemean with the arugment array
// Check to see if the array is an Array data type using Arry.isArray()
// delcare variable mean = null; to store the mean result
// declare variable mode = null; to store the highest mode result
// declare object numbers {}, to keep track of number repeated with the given array
// loop through each element in the array and sum them together
// divide the sum result by the array length
// use Math.floor on the previous step and assign to mean
// Use a for loop from let i = 0 to exclusive array.length
// on each iteration store the number in the object numbers
// if the object numbers has the num property, increase count
// otherwise add the num property but store 0 count as the values
// use the Object.values() to get the array of counts and sort from most to least
// use the Object.keys() to get the array of keys using filter
// if the keys has a value that is === the array count[0] then return that values
// sort that filter using the sort method from most to least
// grab the key[0] assign to mode
// compare the mean === to mode;
function modemean(array) {
  let mean = null;
  let mode = null;
  const modeObj = {};
  const copyArray = Array.from(array);

  mean = copyArray.reduce((acc, curr) => acc + curr);

  mean = Math.floor(mean / array.length);

  // console.log(mean);

  copyArray.forEach((element) => {
    if (!modeObj[element]) {
      modeObj[element] = 1;
    } else {
      modeObj[element] += 1;
    }
  });

  // console.log(copyArray);
  console.log(modeObj);

  let modeArray = Object.keys(modeObj).map(function(key) {
      return modeObj[key];
  });

  console.log(modeArray);
  mode = modeArray.sort((a, b) => b - a).shift();
  console.log('mode', mode);

  modeArray = Object.keys(modeObj).filter(key => modeObj[key] === mode).map(el => parseInt(el, 10));
  console.log(modeArray);

  mode = modeArray.sort((a, b) => b - a).shift();

  return mode === mean;
}

// console.log(modemean([1, 2, 2, 3]));
// console.log(modemean([1, 4, 5, 5, 6, 6]));

module.exports = modemean;
