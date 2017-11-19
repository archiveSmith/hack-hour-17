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
  let maxFreq = 0;
  let maxMode = -Infinity;
  let sum = 0;

  array.reduce((obj, curr) => {
    sum += curr;
    obj[curr] ? ++obj[curr] : obj[curr] = 1;
    if (obj[curr] === maxFreq && curr > maxMode) {
      maxMode = curr;
    } else if (obj[curr] > maxFreq) {
      maxFreq = obj[curr];
      maxMode = curr;
    }
    return obj;
  }, {});

  return Math.floor(sum / array.length) === maxMode;
  // let sum = 0;
  // let mode;
  // for(let i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }

  // let mean = Math.floor(sum/array.length);

  // let count = array.reduce(function (acc, ele) {
  //   if(!acc.count[ele]) {
  //     acc.count[ele] = 0;
  //   }
  //   acc.count[ele]++;
  //   return acc;
  // }, {count: {}});

  // let values = Object.values(count.count);
  // let max = Math.max.apply(null, values);

  // for(let prop in count.count) {
  //   if(count.count[prop] === max) {
  //     mode = prop;
  //   }
  // }

  // return mean = mode ? true : false;
}

module.exports = modemean;

