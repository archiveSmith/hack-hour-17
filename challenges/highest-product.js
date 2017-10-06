/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array) || array.length < 3) return 0;

    let arr = array.sort((a, b) => a - b);
    
    let lastThree = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    let firstThree = arr[0] * arr[1] * arr [2];
    let firstTwoAndLastOne = arr[0] * arr[1] * arr[arr.length - 1];
    let firstOneAndLastTwo = arr[0] * arr[arr.length - 1] * arr[arr.length - 2]
    
    return Math.max(lastThree, firstThree, firstTwoAndLastOne, firstOneAndLastTwo);
}


module.exports = highestProduct;
