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
    let mean;
    let obj = {};

    for (element of array) {
        sum += element;
        if (obj[element]) obj[element] += 1;
        else obj[element] = 1;
    }
    
    mean = sum / array.length;
    
    let modeNum = 0;
    let modeKey;

    for (key in obj) {
        if (modeNum < obj[key]) {
            modeNum = obj[key];
            modeKey = Number(key);
        }
    }

    return mean === modeKey;
}

module.exports = modemean;
