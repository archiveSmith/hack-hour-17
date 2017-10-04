/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  const reversed = array.sort((a, b) => a - b).reverse();
  return reversed[0] * reversed[1] * reversed[2];
}


module.exports = highestProduct;

console.log(highestProduct([1, 2, 3, 4]));
console.log(highestProduct([1, 3, 5, 2]));
console.log(highestProduct([-1, -3, 2, 3]));
console.log(highestProduct('testing'));
console.log(highestProduct([1, 2]));
