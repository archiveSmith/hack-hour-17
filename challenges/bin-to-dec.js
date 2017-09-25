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
  let digits = binary.split("").reverse();

  let answer = digits.reduce(function (acc, ele, index) {
    if (ele === '1') {
      acc = acc + Math.pow(2, index);
    }
    return acc;
  }, 0);

  return answer;
  }

module.exports = binToDec;
