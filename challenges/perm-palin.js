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

function permPalin(str){
  if (str.length === 1) return true;
  str = str.toLowerCase('').split('');
  let arrToNotReverse = [];
  let arrToReverse = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) {
        for (let k = i; k <= j; k++) {
          arrToNotReverse.push(str[k]);
          arrToReverse.push(str[k]);
        }
        if (arrToReverse.toString() === arrToNotReverse.reverse().toString()){
          return true;
        } 
        else {
          arrToReverse = [];
          arrToNotReverse = [];
        }
      }
    }
  }
  return false;
}
  
module.exports = permPalin;
  
  
  
