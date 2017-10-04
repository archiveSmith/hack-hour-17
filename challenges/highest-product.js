/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const formattedArr = array.filter(elem => typeof elem === 'number').sort((a,b) => a-b);
  if (formattedArr.length < 3) return;
  const topThree = formattedArr.slice(-2);
  return topThree.reduce((acc,val) => acc *= val, formattedArr[formattedArr.length - 3]);
}

// ========== //
// TEST CASES //
// ========== //
// console.log(highestProduct([3,2,1]));
// console.log(highestProduct([5,'a',7]));
// console.log(highestProduct([10,5,8,29,3,15]));

module.exports = highestProduct;
