/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// check if input array is an Array, otherwise return undefined
// check if input array is not empty, otherwise return undefined
// check if the input array have at least the length of three, otherwise return undefined
// use filter array method to make sure each element is a number for the input array
// copy the input array to the new define variable newInputArray
// reverse the input array of the newInputArray
// slice the newInputArray from 0 to 2
// use reduce array method to get the product of newInputArray
// return the result of the reduce array method of newInputArray
function highestProduct(array) {
  if (!Array.isArray(array)) return;
  if (array.length === 0) return;

  let newInputArray = array.filter( ele => Number.isInteger(ele));

  if (newInputArray.length === 0 || newInputArray.length < 3) return;

  newInputArray = newInputArray.sort((a, b) => b - a)
    .slice(0,3);

  return newInputArray.reduce((acc, curr) => acc * curr);
}


console.log(highestProduct([2,1, 500, 400, 80, 400]));

module.exports = highestProduct;
