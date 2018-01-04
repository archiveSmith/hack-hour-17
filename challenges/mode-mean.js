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


// modularized functions: getMean and getMode

// function getMean(arr) {
//   const len = arr.length;
//   const sum = arr.reduce((acc, curr) => acc + curr);
//   return Math.floor(sum / len);
// }

// function getMode(arr) {
//   return arr.reduce((acc, curr) => {
//     let freq = acc.numMap[curr];
//     freq = !freq ? 1 : freq + 1;
//     acc.numMap[curr] = freq;
//     if (freq > acc.highestFreq) {
//       acc.highestFreq = freq;
//       acc.mode = curr;
//     }
//     return acc;
//   }, { mode: null, numMap: {}, highestFreq: 0}).mode;
// }

function modemean(array) {
  let sum = 0;
  let mean, mode;
  const obj = {};
  let highestFreq = 0;

  for (let element of array) {
      sum += element;

      let freq = obj[element];
      freq = freq ? freq + 1 : 1;
      obj[element] = freq;

      if (freq > highestFreq) {
        highestFreq = freq;
        mode = element;
      }
  }
  mean = Math.floor(sum / array.length);
  return mean === mode;
}

module.exports = modemean;
