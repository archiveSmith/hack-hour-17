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

function getAllProducts (array) {
  if (!Array.isArray(array) || array.length === 0) return [0];
  const forward = new Array(array.length).fill(1);
  for (let i = 1; i < array.length; i += 1) {
    forward[i] = array[i - 1] * forward[i - 1];
  }
  const backward = new Array(array.length).fill(1);
  for (let i = array.length - 2; i >= 0; i -= 1) {
    backward[i] *= array[i + 1] * backward[i + 1];
  }

  return forward.map((curr, i) => curr * backward[i]);
}

module.exports = getAllProducts;
