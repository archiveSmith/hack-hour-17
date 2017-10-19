/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] + arr[i + 1] === n) { return true; }
    const newArr = [arr[i], ...arr.slice(i + 2)];
    // console.log('check:', arr[i], 'and', arr[i + 1], 'newArr:', newArr);
    if (newArr.length < 2) { return false; }
    if (twoSum(newArr, n)) return true;
  }
  return false;
}

// console.log(twoSum([4, 3, 5, 2], 8));

module.exports = twoSum;
