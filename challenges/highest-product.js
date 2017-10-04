/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //edge cases
    //ignore non numeric characters
    array.filter(x => typeof x === 'number'); //not working yet
    if(array.length < 3) return false;
    //sort array 
    array.sort((a, b) => b - a);
    //take 1st three values values
    // console.log([array[0], array[1], array[2]]);
    return (array[0] * array[1] * array[2]);
    //highest value?
}

// console.log(highestProduct([1,2,3,4,5]));

module.exports = highestProduct;
