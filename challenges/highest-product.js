/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //declare a variable which we will call 'largestProduct' Set equal to product of first three integers.
    let largest = array[0]*array[1]*array[2];
    let product = 1;
    //loop through array.
    //nest a loop through that array.
    //nest a loop in that loop.
    //this will check all possible combinations
    
    for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        for (let k = j+1; k < array.length; k++) {
          product = (array[i] * array[j] * array[k]);
          if (product > largest) {
            largest = product;
          } 
        }
      }
    }
    return largest;
  }


module.exports = highestProduct;
