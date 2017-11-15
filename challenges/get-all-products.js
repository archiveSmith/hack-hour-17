/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

// O(n^2) time
const getAllProducts = (array) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let product;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        if (!product) product = array[j];
        else product *= array[j];
      }
    }
    result.push(product);
  }
  return result;
};

// // O(n) time
// const getAllProducts = (array, product) => {
//   if (!array || !Array.isArray || array.length < 1) return;
//   if (array.length === 1) return product !== undefined ? product : array[0];
//   let spliced = array.splice(0, 1);
//   product = product !== undefined ? product * spliced : spliced;

// };

// console.log('[84, 12, 28, 21] ->', getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
