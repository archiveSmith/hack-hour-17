/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let max = -Infinity;
    array.forEach(ele => {
        if(ele > max) {
            max = ele;
        }
    })
    return max;
}

module.exports = highestProduct;
