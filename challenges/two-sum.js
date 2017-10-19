/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 * 
 * ----------PSUDOCODE----------
 * 
 * 
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; i < arr.length; j++) {
      if (i+j === n) return true;
    }
  }
  return false;
}



console.log(arr)

module.exports = twoSum;
