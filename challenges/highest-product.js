/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) {
        return;
    }

    //check positive and negative
    array.sort();
    if(array[0]*array[1] > array[array.length-1]*array[array.length-2])
        return array[0]*array[1]*array[array.length-1];
    else
        return array[array.length-1]*array[array.length-2]*array[array.length-3];
}


module.exports = highestProduct;
