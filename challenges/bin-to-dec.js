/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    
    //split the binary number
    let binArr = binary.split('');
    //setup output
    let output = 0;
    //use two variables to loop from beg and from end
    for(let i = binArr.length-1, j = 0; i > 0, j < binArr.length; i -= 1, j++){
        output += Number(binArr[j]) * Math.pow(2, i)
    }
    //return output
    return output;
}

// console.log(binToDec('111001'));

module.exports = binToDec;
