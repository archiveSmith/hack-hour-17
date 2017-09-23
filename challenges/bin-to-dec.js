/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
  * 	binToDec('110') -> 6
    * 	binToDec('111') -> 7
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  //console.log(parseInt(binary, 2))
  let value = 0
  let counter = 0
  let length = binary.length
  let arr = binary.split('')
  if (arr.length === 1 && arr[0] === 0) { return 0}
  if (arr.length === 1 && arr[0] === 1) { return 1}
  // calculate the value of the first
  if (arr[arr.length - 1] === "1") {value += 1}
  if (arr[arr.length - 2] === "1") {value += 2}
  if (length > 2) {
    for (let i = arr.length - 1; i > 1; i -= 1) {
      if (arr[counter] === "1") {
        value += Math.pow(2, i)
      }
      counter += 1
    }
  }
  return value
}


module.exports = binToDec;
