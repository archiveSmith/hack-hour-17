/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;

  const newArr = array.sort((a, b) => Math.abs(b) - Math.abs(a));
  const lastIndex = newArr.length - 1;
  const firstThree = newArr[0] * newArr[1] * newArr[2];
  const smallestNeg = newArr[0] * newArr[1] * newArr[newArr.length - 1];
  const allNeg = newArr[lastIndex] * newArr[lastIndex - 1] * newArr[lastIndex - 2];

  if (newArr.every(num => num < 0)) return allNeg;
  if (firstThree > 0) return firstThree;
  return smallestNeg;
}


module.exports = highestProduct;

console.log(highestProduct([1, 2, 3, 4]));
console.log(highestProduct([1, 3, 5, 2]));
console.log(highestProduct([-3, -2, -1, -6, -5])); // should be -6
console.log(highestProduct([-1, -3, 2, 3])); // should be 9!!!!!!!!!!!!!
console.log(highestProduct([-6, -1, -2, 3])); // should be 36
console.log(highestProduct([1, 0, 0, 2, 3]));
console.log(highestProduct('testing'));
console.log(highestProduct([1, 2]));
