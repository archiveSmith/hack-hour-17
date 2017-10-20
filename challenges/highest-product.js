/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let numArr = array;
    numArr.sort(function(a, b){return b-a});
    console.log(numArr);
    let result;
    if (numArr.length === 2) {
        return numArr[0] * numArr[1];
    } else if (numArr.length === 1) {
        return numArr[0];
    } else if (numArr.length === 0) {
        return undefined;
    }

    if (numArr[array.length-1] >= 0) {
        result = numArr[0] * numArr[1] * numArr[2];
        return result;
    } else if (numArr[0] < 0) {
        result = numArr[0] * numArr[1] * numArr[2];
        return result;
    } else { 
        //find number of negative integers
        let numNeg = 0;
        for (let x = numArr.length; x > 0; x--) {
            if (numArr[x] < 0) {
                numNeg++;
            }
        }
        // if number of negative integers is even
        if (numNeg % 2 === 0) {
            for (let y =0; y < numArr.length; y++) {
                if (numArr[y] < 0) {
                    numArr[y] = numArr[y] * -1;
                }
            }
            numArr.sort(function(a, b){return b-a});
            result = numArr[0] * numArr[1] * numArr[2];
            return result;
        }
        // if number of negative integers is less than 2
        else if (numNeg < 2) {
            result = numArr[0] * numArr[1] * numArr[2];
            return result;
        }
        // if number of negative integers is odd but greater than 2
        // else if (numNeg > 2 && 
    }

}


// module.exports = highestProduct;
// var testArr = [10,3,5,23,18,3];
// var testArr = [-10,-3,-5,-23,-18,-3];
var testArr = [1, -4, 3, -6, -7, 0];
console.log(highestProduct(testArr));
