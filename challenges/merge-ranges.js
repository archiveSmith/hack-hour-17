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
  for (let i=0; i < array.length; i++) {
    let [a,b] = array[i];
    if (a > b) array[i] = [b,a];
 }
 array.sort( (a,b) => {
   return a[0] - b[0];
 })

 let finArray = [];
 for (let j = 0; j < array.length && array[j+1]; j++) {

   if (array[j+1][0] <= array[j][1]) {
     array[j].pop();
     array[j].push(array[j+1][1])
     array.splice(j+1,1);
   }
 }
 console.log(array)
}


//[0,1] [3,5]  [4,8]  [9,10]  [10,12]
mergeRanges([[0, 1], [5,3], [4, 8], [10, 12], [9, 10]])
module.exports = mergeRanges;
