/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// reorder the array from large to least
// check each element starting from index 0 to array.length -1 to see if it is bigger than the target
// if all elements is bigger than the target, return false
// if not, starting from the array index that is less than the target
// add each element of the array to the value of starting from the array index
// do it until you reach a value that is equal to a target, return true
// if it doesn't return false
function subsetSum(array, target) {
  // check to see if array is array
  if (!Array.isArray(array) || !Number.isInteger(target)) return;
  // reorder my array
  orderArray = Array.from(array.sort((a, b) => b - a));
  console.log(orderArray);

  // check to see if all elements are greater than target
  const booleanElements = orderArray.every((element) => element > target );
  if (booleanElements) return;
  // console.log(booleanElements);

  let newMapArray = orderArray.map((element) => {
    // console.log(target);
    if (element > target) {
      element = 0;
    }
    return element;
  });

  console.log(newMapArray);


  for (let i = 0; i < newMapArray.length; i++) {
    for (let j = 0; j < newMapArray.length; j++) {
      if (newMapArray[i] + newMapArray[j] === target) {
        return true;
      }
    }
  }
  return false;


}

console.log(subsetSum([3, 7, 4, 2], 5), 5);
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32), 32);
console.log(subsetSum([8, 2, 4, 12], 13), 13);
console.log(subsetSum([8, -2, 1, -3], 6), 6);
module.exports = subsetSum;
