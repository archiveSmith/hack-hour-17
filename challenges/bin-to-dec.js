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
  let binArr = binary.split('');


    let number = binArr.reduce(function(acc, curr, index) {

      curr = Number(curr);
      console.log(index);
       acc+= (curr * curr * 2 ^ (binArr.length-index-1));
       return acc;
    },0);
  //console.log(number);
  return number;
  }


//module.exports = binToDec;
