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
  // the base is 2, the power is base on the position where the 01 placement
  // check if binary is a String return a null, otherwise continue
  if (typeof binary !== 'string') return;

  if (binary.length === 0 && binary === '0') return 0;
  if (binary.length === 0 && binary === '1') return Math.pow(2, binary.length);

  binary = binary.slice(1, binary.length);
  // console.log(binary)
  return binToDec(binary.slice(1));
}

console.log(binToDec('0'));
console.log(binToDec('11'));
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('0101'));
module.exports = binToDec;
