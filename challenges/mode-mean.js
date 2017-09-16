/*
 * Given an array of numbers, determine if the mode and mean
 * of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

function modemean(array) {
  const mean = Math.floor(array.reduce((acc, curr) => acc + curr) / array.length);
  let mode;
  let temp = 0;
  const tally = {};
  for (let i = 0; i < array.length; i += 1) {
    if (tally[array[i]]) {
      tally[array[i]] += 1;
    } else { tally[array[i]] = 1; }
  }
  const keys = Object.keys(tally);
  for (let j = 0; j < keys.length; j += 1) {
    const repeatCount = tally[keys[j]];
    const currNumberInArr = parseInt(keys[j], 10);
    if (repeatCount > temp) {
      temp = repeatCount;
      mode = currNumberInArr;
    }
    if (repeatCount === temp) {
      if (currNumberInArr > mode) { mode = currNumberInArr; }
    }
  }
  return mean === mode;
}

module.exports = modemean;
