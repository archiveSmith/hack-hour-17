/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length<3) return;
  let sorted = array.sort((a,b) => {
    return b-a;
  })

  return array[0] * array[1] * array[2];
}


module.exports = highestProduct;

console.log(highestProduct([1,6,9,3,5,7,8,4]));
