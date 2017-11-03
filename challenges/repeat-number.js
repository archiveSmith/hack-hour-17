/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    // let sortedArr = array.slice().sort();
    // let results = [];
    // for (let i = 0; i < array.length - 1; i++) {
    //   if (sortedArr[i + 1] == sortedArr[i]) {
    //       results.push(sortedArr[i]);
    //   }
    // }
    // res = results.toString()
    // return JSON.parse(res);

    let obj = {};
    for (let i = 0; i < array.length; i += 1) {
        let num = array[i];
        if (!obj[num]) obj[num] = 1;
        else obj[num] += 1;
    }
    let index = 0;
    let max = 0;
    for (let objIndex in obj) {
        if (obj[objIndex] > max) {
            max = obj[objIndex];
            index = objIndex;
        }
    }
    return index;
}

module.exports = repeatNumbers;
