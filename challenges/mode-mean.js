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
    function calcMean(array) {
        return Math.floor(array.reduce((sum, element) => sum += element) / array.length);
    }
    function calcMode(array) {
        let counts = {}
        array.forEach((el) => {
            counts[el] ? counts[el]++ : counts[el] = 1;
        });
        let max = maxVal = 0;
        for (key in counts) {
            if (counts[key] > max) {
                max = counts[key];
                maxVal = key;
            }
            if (counts[key] === max && key > maxVal) {
                maxVal = key;
            }
        }
        return parseInt(maxVal);
    }
    return calcMean(array) === calcMode(array);
}

module.exports = modemean;
