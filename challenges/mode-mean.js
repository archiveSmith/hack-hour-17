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
  const modeObj = {};
  array.forEach((num) => {
    modeObj[num] = modeObj.hasOwnProperty(num) ? modeObj[num] += 1 : 1;
  });
  const mode = (Number)(Object.entries(modeObj).reduce((acc, curr) => {
    return ((acc[1] < curr[1]) || (acc[1] === curr[1] && acc[0] < curr[0])) ? curr : acc;
  })[0]);
  const mean = Math.floor(array.reduce((acc, curr) => {
    return acc + curr;
  }, 0) / array.length);
  return mode === mean;
}

module.exports = modemean;
