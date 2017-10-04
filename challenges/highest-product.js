/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return array.reduce((prod, curr) => prod *= curr);
  let largestNumbers = [];
  const negatives = [];
  array.forEach((num) => {
    if (num < 0) {
      negatives.push(num);
      negatives.sort((a,b) => a > b);
    }
    else {
      largestNumbers.push(num);
      largestNumbers.sort((a,b) => a > b);
      largestNumbers = largestNumbers.slice(-3);
    }
  });

  const smallestPositiveProduct = largestNumbers[1] ? largestNumbers[0] * largestNumbers[1] : largestNumbers[0];

  if (negatives.length > 1 && negatives[0] * negatives[1] > smallestPositiveProduct) {
    return negatives[0] * negatives[1] * largestNumbers.slice(-1);
  }
  else {
    return largestNumbers.reduce((prod, curr) => prod *= curr);
  }
}

module.exports = highestProduct;
