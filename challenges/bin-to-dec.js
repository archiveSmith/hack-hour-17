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
//convert string to array
//loop through 
//last digit is length-1
//for every #, multiply [i] by last digit - i
  let newArr = binary.split('');
  let last = newArr.length - 1;
  let decimalEquiv = 0;
  for (let i in newArr) {
    decimalEquiv += newArr[i] * (Math.pow(2, last - i));
  }
  return decimalEquiv;
}

module.exports = binToDec;

let test = "1111";
console.log(binToDec(test));
