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
  let decimalNum = 0;
  const binaryArr = binary.split('').reverse();
  for (let i = 0; i < binaryArr.length; i++) {
    if (i < binaryArr.length - 1) {
      if (binaryArr[i] === '1') {
        decimalNum += 2;
      } else if (binaryArr[i] === '0') {
        decimalNum += 1;
      } else {
        return null;
      }
    } else {
      if (binaryArr[i] === '1') {
        decimalNum += 1;
      } else if (binaryArr[i] === '0') {
        decimalNum += 0;
      } else {
        return null;
      }
    }
  }
  return decimalNum;
}


// Tried this with Recursion -> No joy in time..

// function binaryRecursion(binaryArr) {
//     let decimalNum = 0;

//   console.log("binaryArr.length", binaryArr.length);
  
//   if (binaryArr.length < 2) {    

//     const lastDigit = binaryArr[0];

//     console.log("lastDigit", lastDigit);
//     if ((lastDigit !== '1') && (lastDigit !== '0')) {
//       return null;
//     }
//     const ret =  binaryArr[0] === '1' ? 2 : 1;
//     console.log("ret", ret);
//     return ret;
//   }
//   console.log('call it again');

//   decimalNum = binToDec(binaryArr.slice(0, -1).join(''));
//   console.log("decimalNum", decimalNum);
//   return decimalNum;


// }


// function binToDec(binary) {
  
//   let binaryArr = binary.length > 1 ? binary.split('') : binary;
//   binaryArr = binaryArr.reverse();

//   const firstDigit = binaryArr.shift();


// }




module.exports = binToDec;
