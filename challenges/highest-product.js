/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //get all products of three numbers from an array and find the biggest one

    //edge case
    // if (array.length < 3) return false;


    // let product = 0;

    // for (let i = 0; i < array.length - 2; i += 1) {
    //     for (let j = i + 1; j < array.length - 1; j += 1) {
    //         for (let z = j + 1; z < array.length; z += 1) {
    //             let tempProd = array[i] * array[j] * array[z];

    //             if (tempProd > product) {
    //                 product = tempProd
    //             }
    //         }
    //     }
    // }
    // return product;

    // or sort and then take first three elements and multiply them
    if (array.length < 3) return 0;
    
    let sorted = array.sort((a, b) => {
        return b - a;
    });

    return sorted[0] * sorted[1] * sorted[2]


}


module.exports = highestProduct;
