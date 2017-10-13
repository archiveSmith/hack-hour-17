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
  if(!str || typeof str !== 'string') return 0;
  if(str.length === 1) return true;
  let perm = str;

  for(let i = 0; i < str.length; i++){
    // initialize palindrome stack
    let permArr = perm.split('');
    let stack = [];
    // check for odd length and remove middle if true
    let isOdd = perm.length % 2 !== 0;
    if(isOdd) {
      let middle = Math.floor(perm.length / 2);
      permArr.splice(middle, 1);
    }
    // check perm for palindrome
    for(let j = 0; j < permArr.length; j++){
      if(!stack.length || stack[0] !== permArr[j]) stack.push(permArr[j]);
      else stack.shift();
    }
    if(!stack.length) return true;
    // rotate to next perm to next perm
    permArr = perm.split('');
    let firstChar = permArr.shift();
    permArr.push(firstChar);
    perm = permArr.join('');
  }
  
  return false;
}

// console.log('abab -> TRUE -> ', permPalin('abab'));
// console.log('cbaba -> TRUE -> ', permPalin('cbaba'));
// console.log('cbac -> FALSE -> ', permPalin('cbac'));
// console.log('a -> TRUE -> ', permPalin('a'));

module.exports = permPalin;