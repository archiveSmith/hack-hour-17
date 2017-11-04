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
  // const cache = {};
  // // loop through array of ranges
  // for (let i = 0; i < array.length; i++) {
  //   console.log('current range', array[i]);
  //   let curRange = array[i];
  //   // loop through each item in current range
  //   for (let j = curRange[0]; j < (curRange[curRange.length - 1] - 1); j++) {
  //     console.log('current item in range', array[i][j]);
  //     // add each our -1 in current range to cache
  //     if(!cache[array[i][j]]) cache[array[i][j]] = true;
  //   }
  // }

  // const condensed = [];
  // const starts = Object.keys(cache);
  // let curArr = new Array(2);
  // curArr[0] = Number(starts[0]);
  // curArr[1] = curArr[0] + 1;
  // // loop through each key in cache
  // for(let x = 1; x < starts.length; x++){
  //   let curKey = Number(starts[x]);
  //   console.log('curkey', curKey);
  //   // if not equal to curArr end + 1
  //   console.log('curArr end: ', curArr[curArr.length - 1]);
  //   if(curKey !== (curArr[curArr.length - 1] + 1)) {
  //     if(!curArr[1]) curArr[1] = curArr[0] + 1;
  //     // push curArr to condensed
  //     condensed.push(curArr);
  //     // set curArr to new empty array
  //     curArr = new Array(2);
  //     // push current key into new curArr
  //     curArr[0] = curKey;
  //     curArr[1] = curArr[0] + 1;
  //   }
  //   // if equals curArr end + 1
  //   else if(curKey > (curArr[curArr.length - 1] + 1)) {
  //     // set curArr[1] to current key
  //     curArr[1] = curKey;
  //   }
  // }

  // return condensed;

}

// console.log('[[0, 1], [3, 8], [9, 12]] ->', mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
