/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {

  const strArr = str.split('');
  const length = strArr.length;
  if (length === 1) {
    return true;
  }
  for(let i = 0; i < length; i += 1) {    
    if (i > length - 3) {
      return false;
    }
    const threeLetterArr = strArr.slice(i, i + 3);
    const threeLetterStr = threeLetterArr.join('');
    const reverseLetterStr = threeLetterArr.reverse().join('');
    if (reverseLetterStr === threeLetterStr) {
      return true;
    }  
  }
   return false;
}

module.exports = permPalin;