/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
// edge cases - array is null,
// not an array or has less than three elements close function

// 1. sort number big to small ()
// 2. biggest 3(+) , smallest 2 (-)
// 3. If the two smaller numbers of biggest 3 
// is larger than the two smallest / most numbers, return products
// 4. otherwise return product of the largest number of the biggest
// three and the two most negative numbers.




//OR 
// use -infinity and Infinity 


    const pool = array.sort(function(a,b) {
        return b-a;
    })
    return pool[0]*pool[1]*pool[2]
}
module.exports = highestProduct;
