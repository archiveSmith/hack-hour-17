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
    let merged = [];   // Array of merged tuple results
    let i = 0;        // Index to the current tuple being evaluated;
    let element = array[i];  // Next element to be added to the merged tuple results
if (array.length === 0) return [];


array.sort(function(a, b) {
    return (a[0] > b[0]);
});

do {
    i += 1;
    if (i < array.length && element[1] >= array[i][0]) {
        if (element[1] < array[i][1]) {
            element[1] = array[i][1];
        }
    } else {
        merged.push(element);
        element = array[i];
    }
} while (i < array.length);

return merged;
}

module.exports = mergeRanges;
