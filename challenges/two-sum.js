/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    // check if arr length is less than 0 or n is an integer return false
    if (arr.length < 0 || typeof n === 'number') return false;
    // find the difference of n - arr[i]
    const difference = arr.map(number => n - number);
    // console.log(arr);
    // console.log(difference);
    // check to see the return difference is in the arr[i]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === difference[j]) {
                return true;
            }
        }
    }
    return false;
    // if it is there return true
    // got back to the first step and n- arr[i+1]
    // otherwise return false
}

// console.log(twoSum([2,4,7,1], 9));
// console.log(twoSum([1, 2, 4], 'test'));

module.exports = twoSum;
