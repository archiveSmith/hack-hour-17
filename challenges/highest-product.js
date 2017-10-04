/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    function sortNumber(a,b) {
        return a - b;
    }
    array.sort(sortNumber);
    let i = array.length-1;
    const product = array[i]*array[i-1]*array[i-2];
    return product;
}


module.exports = highestProduct;
