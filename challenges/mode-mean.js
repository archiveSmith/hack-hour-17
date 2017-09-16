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
    //mode
    let modeArr = [];
    for (let i = 0; i < array.length; i++) {
        array.sort();
        if (array[i] === array[i + 1]) {
            modeArr.push(array[i])
        }
    }
    //remove duplicates from modeArr
    uniqueArray = modeArr.filter(function (item, pos) {
        return modeArr.indexOf(item) == pos;
    })
    // console.log('Array of modes',uniqueArray)

    // get the max value from array
    let len = uniqueArray.length
    let max = -Infinity;
    while (len--) {
        if (Number(uniqueArray[len]) > max) {
            max = Number(uniqueArray[len]);
        }
    }
    // console.log('Max value of modes',max)



    //mean
    let total = 0;
    let mean;
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    mean = Math.floor(total / array.length)

    // if mode === mean return true, else return false
    return (max === mean) ? true : false;
}

module.exports = modemean;
