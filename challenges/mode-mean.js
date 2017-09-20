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
  let modeCheck = mode(array);
  let meanCheck = mean(array);
  return modeCheck == meanCheck ? true : false;
}

/*
 * *****************************
 * ******HELPER FUNCTIONS*******
 * *****************************
 */

function mode(array) {
  let obj = {};
  let maxCount = 0;
  let mode;

  array.forEach(ele => { obj[ele] ? obj[ele]++ : obj[ele] = 1 })
  for (prop in obj) {
    if (obj[prop] > maxCount) {
      maxCount = obj[prop];
      mode = prop;
    }
  }
  return mode;
}

function mean(array) {
  let mean = Math.floor(array.reduce((acc, ele) => {
    acc += ele;
    return acc;
  }, 0) / array.length);

  return mean;
}

module.exports = modemean;
