/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if (!Array.isArray(array)) return 0;
  if (array.length === 3) return array.reduce((a, b) => a * b);

  //this will be our target to be higher than
  let highestNum = 0;

  for (let i = 0; i < array.length-1; i += 1) {
    let num = array[i];
    let newArray = [...array.slice(0,i), ...array.slice(i+1)];
    for (let j = 0; j < newArray.length-1; j += 1) {
      let product = num * newArray[j] * newArray[j+1];
      if (product > highestNum) {
        highestNum = product;
      }
    }
  }
  return highestNum;
}


module.exports = highestProduct;

console.log(highestProduct([-1,2,3]));