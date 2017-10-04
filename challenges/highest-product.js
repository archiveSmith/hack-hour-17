/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

const highestProduct = (array) => {
  if(!Array.isArray) return 0;
  let formattedArr = array.filter(elem => typeof elem === 'number');
  if(formattedArr.length < 3) return 0;
  let highest = -Infinity;
  for(let first = 0; first < formattedArr.length - 2; first++){
    for(let sec = 1; sec < formattedArr.length - 1; sec++){
      for(let third = 2; third < formattedArr.length; third++){
        let prod = formattedArr[first] * formattedArr[sec] * formattedArr[third];
        if(prod > highest) highest = prod;
      }
    }
  }
  return highest;
}

// ========== //
// TEST CASES //
// ========== //
// console.log(highestProduct([-10,-1,1,2]));
// console.log(highestProduct([5,'a',7]));
// console.log(highestProduct([10,5,8,29,3,15]));

module.exports = highestProduct;
