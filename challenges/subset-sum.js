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
//check for individual pair matches
  for (let i = 1; i < array.length; i += 1) {
    if (array[0] + array[i] === target) {
      return true;
    }
  }

//pull one number out of array and compare against rest
function subArrayCheck (array, subArray = array.slice(1)) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < subArray.length; j += 1) {
      if (array[0] + 
    }
  }
}

return false;

}

module.exports = subsetSum;

console.log(subsetSum([3, 7, 4], 5));
