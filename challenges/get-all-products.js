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

function getAllProducts(array) {
    let res = []
    if (array.length === 0){
        return [0]
    }
    for (let i = 0; i < array.length; i += 1) {
        let prod = 1;
        for (let j = 0; j < array.length; j += 1) {
            if (i !== j) {
                prod *= array[j];
            }
        }
        res.push(prod)
    }
    return res
}

// function getAllProducts(array) {
//     var products = array.reduce(function(acc, curr) {
//       return acc * curr;
//     }, 1);
//     return array.map(function(curr) {
//       return products / curr;
//     });
//   }
  
  // Find Products Before and After
//   function getAllProducts(array) {
//     if (!array || !array.length) {
//       return [0];
//     }
  
//     var front = [];
//     var back = [];
//     var result = [];
  
//     var productSoFar = 1;
//     for (var i = 0; i < array.length; ++i) {
//       front[i] = productSoFar;
//       productSoFar *= array[i];
//     }
  
//     productSoFar = 1;
//     for (var j = array.length - 1; j >= 0; --j) {
//       back[j] = productSoFar;
//       productSoFar *= array[j];
//     }
  
//     for (var k = 0; k < array.length; k++) {
//       result[k] = front[k] * back[k];
//     }
  
//     return result;
//   }

module.exports = getAllProducts;
