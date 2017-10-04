/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
// base case: less than three of integers is not valid
  if (array.length < 3) console.log('NOT VALID');
  // reduce through array to orderfrom largest to smallest
  const orderedArr = array.sort((a, b) => a - b);
  const reversed = orderedArr.reverse();
  return reversed[0] * reversed[1] * reversed[2];
// calculate product of first three and return
}


module.exports = highestProduct;

console.log(highestProduct([1, 2, 3, 4]));
console.log(highestProduct([1, 3, 5, 2]));
