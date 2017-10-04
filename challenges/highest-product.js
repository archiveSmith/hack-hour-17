/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    if (!Array.isArray(array)) return 0;

    function sortNumber(a,b) {
        return a - b;
    }
    array.sort(sortNumber);
    let i = array.length-1;
    const product = array[i]*array[i-1]*array[i-2];
    return product;
}


module.exports = highestProduct;
