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


function modemean(array) {
  let numCount = {};
  let max = 0;
  let sum = 0;
  let mode;
  for (var i = 0; i < array.length; i++) {
    let num = array[i];
    if (numCount[num] === undefined) {
      numCount[num] = 1;
    } else {
      numCount[num] += 1;
    }
  }
  for (let key in numCount) {
    if (numCount[key] > max) {
      max = numCount[key];
    }
  }
  for (let key in numCount) {
    if (numCount[key] === max && mode === undefined) {
      mode = Number(key);
    }
  }
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  mean = sum / array.length;
  return mean === mode;
}

module.exports = modemean;
console.log(modemean([1,2,3,4,4,4,4,5,6]))