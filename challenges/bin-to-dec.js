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

function binToDec(num) {
    // binary string to decimal
    if (typeof num === "string") {
        let dec = parseInt(num,2);
        return dec;
    } 
    // decimal number to binary string
    else if (typeof num === "number") {
        let bin = num.toString(2);
        return bin;
    }
}


module.exports = binToDec;

// Tests
// console.log(binToDec('0101'));
// console.log(binToDec(4));