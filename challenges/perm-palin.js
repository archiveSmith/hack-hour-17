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
  const letters = {};
  for (let i = 0; i < str.length; i += 1) {
    letters[str[i]] ? delete letters[str[i]] : letters[str[i]] = 1;
  }

  return Object.keys(letters).length <= 1;
}

module.exports = permPalin;