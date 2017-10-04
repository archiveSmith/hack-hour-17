/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!Array.isArray(array)) {
        return 0;
    }
    if (array.filter((num) => num !== 0).length < 3) {
        console.log('zero');
        return 0;
    }

    //check positive and negative
    array.sort();
    if(array[0]*array[1] > array[array.length-1]*array[array.length-2]) {
        if (array[0]*array[1]*array[array.length-1] > 0) {
            return array[0]*array[1]*array[array.length-1];
        }
    }
    else {
        if (array[array.length-1]*array[array.length-2]*array[array.length-3] > 0) {
            return array[array.length-1]*array[array.length-2]*array[array.length-3];
        }
    }

    return 0;
}

console.log(highestProduct([ 1, 2, 3, 4 ]));

module.exports = highestProduct;
