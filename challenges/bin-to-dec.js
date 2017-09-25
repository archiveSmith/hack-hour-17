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
  // input a string of ones and zeros
  // output a number in decimal form
  // iterate and push powers of 2 to new array
  // iterate through binary
    // if 1, then sum = sum + power of 2 [i]
  let powersOf2 = [];
  let sum = 0;
  for (let i = 0; i < binary.length; i++) {
    powersOf2.unshift(Math.pow(2, i));
  }
  for (let r = 0; r < binary.length; r++) {
    if (binary[r] === '1') {
      sum += powersOf2[r];
    }
  }
  return sum;
}
let result = binToDec('010')
console.log(result)


module.exports = binToDec;
