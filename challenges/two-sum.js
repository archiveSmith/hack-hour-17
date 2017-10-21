/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const numsVisited = {};
    for (let i = 0; i < arr.length; i++) {
      if (nums[n - arr[i]]) return true;
      numsVisited[arr[i]] = 'Visited';
    }
  
    return false;
  }

module.exports = twoSum;
