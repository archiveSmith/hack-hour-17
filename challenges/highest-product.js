/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let largestProduct = -Infinity;
  
  if (!Array.isArray(array) && array.length < 3 ) {
    return 0;
  }
    
  for(let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      for (var k = j + 1; k < array.length; k += 1) {
        const product = array[i] * array[j] * array[k];
        if (product > largestProduct) {
          largestProduct = product;
        }
      }
    }
  }
  return largestProduct;
}

module.exports = highestProduct;
