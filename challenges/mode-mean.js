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
  let mean = 0;
  let modeMap = {};
  let mode;
  let count;
  
  if (array.length === 0) {
      return false;
    }
    for (let i = 0; i < array.length; i += 1) {
        mean += array[i];
    }
    mean = mean/array.length;
    
    for (let i = 0; i < array.length; i += 1) {
        if (modeMap[array[i]] === undefined) {
            modeMap[array[i]] = 1;
        } else {
            modeMap[array[i]] += 1;
        }
    }
    for (let key in modeMap) {
        if (mode === undefined) {
            count = modeMap[key];
            mode = key;
        } else if (modeMap[key] >= count && Number(key) > Number(mode)) {
            count = modeMap[key];
            mode = key;
        }
    }
    mode = Number(mode);
    if ( mean === mode) return true;
    return false;
}

module.exports = modemean;
