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
    // 3
    // 7
    // 4
    // 2
    // 3 7
    // 3 4
    // 3 2
    // 7 4
    // 7 2
    // 4 2
    // 3 7 4
    // 3 7 2
    // 3 4 2
    // 7 4 2

    // 14
    if (target === 0) return true;

    if (array.length === 0 && target !== 0) {
      console.log('test1');
      return false;
    }

    if (array[array.length - 1] > target) {
      console.log('test2');
      array = array.slice(0, -1);
      return subsetSum(array, target);
    }
    console.log('test3');
    array = array.slice(0, -1);
    return subsetSum(array, target) || subsetSum(array, target - array.slice(0, -1)); 
}

module.exports = subsetSum;
