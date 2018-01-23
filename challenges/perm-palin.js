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

// we know a palindrom can be made if...
// either all chars occurs twice (even number of chars)
// or all but one char occurs twice (odd number of chars);
function permPalin(str) {
  if (str.length === 1) return true;
  let occurances = {};
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i += 1) {
    if (occurances.hasOwnProperty(strArr[i])) {
      occurances[strArr[i]] += 1;
    } else {
      occurances[strArr[i]] = 1;
    }
  }

  let occVals = Object.values(occurances);
  let oneCount = 0;
  for (let i = 0; i < occVals.length; i += 1) {
    if (oneCount > 1) return false;
    if (occVals[i] === 1) {
      oneCount++;
    } else if (occVals[i] !== 2) {
      return false;
    }
  }
  return true;
}

module.exports = permPalin;
