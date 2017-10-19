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
  if (typeof (str) !== 'string' || str.length === 0) return false;
  const strArr = str.split('');
  if (strArr.length === 1) return true;
  const isEven = strArr.length % 2 === 0;
  const count = strArr.reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  const num = Object.values(count).reduce((acc, curr) => {
    if (typeof acc[curr] === 'undefined') {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  if (isEven && Object.keys(num).join('') === '2') return true;
  else if (!isEven && num[1] === 1 && num[2]) return true;
  return false;
}

module.exports = permPalin;

// console.log(permPalin([1, 2, 3])); // => false
// console.log(permPalin('abab')) // => true abba even has equal
// console.log(permPalin('cbaba')) // => true abcba odd has one in middle
// console.log(permPalin('cbac')) // => false
// console.log(permPalin('a')) // => true
// console.log(permPalin('')); // => false
