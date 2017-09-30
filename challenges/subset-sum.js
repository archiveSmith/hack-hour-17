/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let sumsNeeded = [];
  for(let i = 0; i < array.length; i++){
    if(sumsNeeded.indexOf(array[i]) !== -1) return true;
    console.log('sumsNeeded length is currently', sumsNeeded.length);
    if(sumsNeeded.length > 0){
      let sNLen = sumsNeeded.length;
      for(j = 0; j < sumsNeeded.sNLen; j++) {
        console.log('subtracting j value ', sumsNeeded[j], ' from i value ', array[i], ' which is ', sumsNeeded[j] - array[i]);
        sumsNeeded.push(sumsNeeded[j] - array[i]);
      }
    }
    console.log('target value ', target, ' from i value ', array[i], ' which is ', target - array[i]);
    sumsNeeded.push(target - array[i]);
  }
  console.log('end sumsNeeded', sumsNeeded);
  return false;
}

// ========== //
// TEST CASES //
// ========== //
// console.log('true ==> ', subsetSum([3, 7, 4, 2], 5));
console.log('true ==> ', subsetSum([3, 34, 4, 12, 5, 12], 32));
// console.log('false ==> ', subsetSum([8, 2, 4, 12], 13));
// console.log('true ==> ', subsetSum([8, -2, 1, -3], 6));

module.exports = subsetSum;
