/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    const pool = array.sort(function(a,b) {
        return b-a;
    })
    return pool[0]*pool[1]*pool[2]
}
module.exports = highestProduct;
