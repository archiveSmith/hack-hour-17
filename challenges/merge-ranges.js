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

// let times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]

function mergeRanges(array) {
  // sort based on first index of array;
  const sortedArr = array.sort((a, b) => a[0] > b[0]);
  let mergedRange = false;
  const newRanges = [];
  for (let i = 0; i < sortedArr.length; i += 1) {
    const temp = sortedArr[i];
    if (newRanges.length === 0) {
      newRanges.push(temp);
    }
    for (let j = 0; j < newRanges.length; j += 1) {
      if (newRanges[j][1] >= temp[0]) {
        newRanges[j][1] = temp[1];
        mergedRange = true;
      }
    }
    if (mergedRange === false) {
      newRanges.push(temp);
    }
    // reset mergedRange
    mergedRange = false;
  }
  return newRanges;
}

// console.log(mergeRanges(times));

module.exports = mergeRanges;
