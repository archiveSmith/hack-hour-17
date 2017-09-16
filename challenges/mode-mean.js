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
  let sum = 0;
  let mode;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let mean = Math.floor(sum/array.length);

  let count = array.reduce(function (acc, ele) {
    if(!acc.count[ele]) {
      acc.count[ele] = 0;
    }
    acc.count[ele]++;
    return acc;
  }, {count: {}});

  let values = Object.values(count.count);
  let max = Math.max.apply(null, values);

  for(let prop in count.count) {
    if(count.count[prop] === max) {
      mode = prop;
    }
  }

  return mean = mode ? true : false;

}

module.exports = modemean;
