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
  const mergedTimes = [];
  for (let i = 0; i < array.length; i += 1) {
    addToMergedTimes(mergedTimes, array[i]);  
  }
  return mergedTimes;
}

function addToMergedTimes(mergedTimes, range) {
  for (let i = 0; i < mergedTimes.length; i += 1) {
    if (rangeWithin(mergedTimes[i], range)) {
      mergedTimes[i] = [ Math.min(mergedTimes[i][0], range[0]), Math.max(mergedTimes[i][1], range[1]) ];
      return mergedTimes;
    } 
  }
  mergedTimes.push(range);
  return mergedTimes;
}

function rangeWithin(thisRange, newTimes) {
  const start = thisRange[0]
  const end = thisRange[1];
  const newStart = newTimes[0];
  const newEnd = newTimes[1];
  return ((newStart >= start && newStart <= end) || (newEnd >= start && newEnd <=end));
}

module.exports = mergeRanges;
