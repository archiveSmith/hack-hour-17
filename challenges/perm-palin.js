/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 * -------------------PSUDOCODE-------------------
 *  - set object variable
 *  - iterate through string
 *  - set key/value pairs to one if str does not exist in obj
 *  - delete key/value if key exist
 *  - return true for length === 0 : false for length <= 1
 */

function permPalin(str) {
  const letters = {};

  for (let i = 0; i < str.length; i++) { letters[str[i]] ? delete letters[str[i]] : letters[str[i]] = 1; }
  return Object.keys(letters).length <= 1;
}




module.exports = permPalin;