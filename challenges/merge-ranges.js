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


// starts = [0, 3, 4. 9, 10];
// ends = [1, 5, 8, 10, 12];

function mergeRanges(array) {
  // let starts = array.map((el) => el[0]).sort((a,b) => a - b);
  // let ends = array.map((el) => el[1]).sort((a,b) => a - b);
  //
  // let output = [];
  // for (let i = 0; i < starts.length; i += 1) {
  //
  // }
  if (!Array.isArray(array)) return;
  let arr = array.slice(0).sort((a,b) => a[0] - b[0]);
  let output = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1][0] <= arr[i][0]) {
      output.push([arr[i][0], arr[i + 1][1]]);
      i += 1;
    }
    else {
      output.push(arr[i]);
    }
  }
  return output;
}

module.exports = mergeRanges;
