/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // input an array of integers
  // output the highest result of multiplying 3 integers
  // sort and take the top 3
  // get product of top 3
  const sorted = array.sort((a,b) => {
    return b - a;
  })
  let product = 1;
  for (let i = 0; i < 3; i++) {
    product *= sorted[i];
  }
  return product;
}

module.exports = highestProduct;
