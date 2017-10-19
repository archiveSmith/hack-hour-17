/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
<<<<<<< HEAD
  if (arr.length < 2) return false;
  for (let i = 0; i < arr.length; i += 1) {
    const one = [arr[i]];
    const remainder = n - one;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] === remainder) {
        return true;
      }
    }
  }
  return false;
}

module.exports = twoSum;

const test = [0, 8, -3, 4];
const target = 5;
console.log(twoSum(test, target));

=======

}

module.exports = twoSum;
>>>>>>> 06a92af8d865e8f029ce1405e3ea772c7abd87a3
