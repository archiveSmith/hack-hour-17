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
  const sum = array.reduce((a, b) => a + b, 0);
  const mean = Math.floor(sum / array.length);

  const modeCollector = {};
  let maxCount = 1;
  let maxNum = array[0];

  for (let i = 0; i < array.length; i += 1) {

    const num = array[i];

    if (modeCollector[num] === undefined) {
      modeCollector[num] = 1;
    } else {
      modeCollector[num] += 1;
    }

    if (modeCollector[num] > maxCount) {
      maxNum = num;
      maxCount = modeCollector[num];
    }
  }
  console.log('mean ', mean, 'mode ', maxNum)
  return mean === maxNum;
}

console.log(modemean([1, 3, 3, 10, 3, 4]));

module.exports = modemean;
