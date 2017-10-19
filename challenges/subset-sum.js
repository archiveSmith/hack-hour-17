/* You are given an array of integers and a target number. Write a function that returns true if
* there is a subset of the array that sums up to the target and returns false otherwise. A subset
* can be any size and the elements do not have to appear consecutively in the array.
*
* subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
* subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
* subsetSum([8, 2, 4, 12], 13) -> false
* subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
*/

// SOLUTION
const subsetSum = (array, target) => {
  if (array.length === 0) return false;
  if (array.includes(target)) return true;

  for (let i = 0; i < array.length; i += 1) {
    // Slice one element out of our input array
    const newArr = [...array.slice(0, i), ...array.slice(i + 1)];
    // Since we are taking one element out, we can subtract that from our target
    const newTarget = target - array[i];

    // console.log('newArr:', newArr, 'newTarget:', newTarget);

    // With this new array, check if any subset adds up to our new target
    if (subsetSum(newArr, newTarget)) return true;
  }

  return false;
};

// console.log(subsetSum([8, 2, 4, 12], 13))

module.exports = subsetSum;
