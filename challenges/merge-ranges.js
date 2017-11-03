/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
    let newArr = [];
    newArr = array.slice().sort(function (a, b) { return a[0] > b[0] })
    let i = 0;
    while (i < newArr.length - 1) {
        let current = newArr[i];
        let nextVal = newArr[i + 1];
        if (current[1] >= nextVal[0]) {
            current[1] = Math.max(current[1], nextVal[1]);
            newArr.splice(i + 1, 1);
        } else {
            i += 1
        }
    }
    return newArr;
}

module.exports = mergeRanges;
