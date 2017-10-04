/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let arr = array.sort((a, b) => a - b);
    
    let lastThree = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    let firstThree = arr[0] * arr[1] * arr [2];
    let firstTwoAndLastOne = arr[0] * arr[1] * arr[arr.length - 1];
    let firstOneAndLastTwo = arr[0] * arr[arr.length - 1] * arr[arr.length - 2]
    
    let tempArr = [lastThree, firstThree, firstTwoAndLastOne, firstOneAndLastTwo];
    let highest = tempArr[0];
    
    for (let i = 0; i < 4; i++) {
      if (tempArr[i] > highest) {
        highest = tempArr[i];
      }
    }
    return highest;
}


module.exports = highestProduct;
