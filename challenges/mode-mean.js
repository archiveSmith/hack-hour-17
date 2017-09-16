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
    var sorted = array.sort();
    let mode = sorted[Math.ceil((array.length-1)/2)];
    let mean = Math.floor(sorted.reduce(function(a, b){return a+b},0)/array.length);
    return mode == mean;
}

module.exports = modemean;
