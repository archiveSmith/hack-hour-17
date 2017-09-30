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
  if(binary === 0 || binary === 1){
    return binary;
  }else{
    let temp = 0;
    let newArr = [];
    newArr = binary.split("");
    newArr = newArr.reverse();
    for(let i = 0; i < newArr.length; i++){
      newArr[i] = parseInt(newArr[i]);
      console.log(newArr);
      temp = Math.pow(2, i)
      newArr[i] = newArr[i] * temp;
    }
    return newArr.reduce((total, num) => total + num);
  }
}

module.exports = binToDec;
