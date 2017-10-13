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
  // base cases if str is 0 or 1 character long 
  if (str.split("").length === 0) return false;
  else if (str.split("").length === 1) return true;
  
  // check if str is already palindrome to save time
  if (testPalindrome(str) === true) {
    return true;
  }
  
  // check if reverse of string is equal to string 
  function testPalindrome(string) {
    let reverse = string;
    reverse = reverse.split("").reverse().join("");
    if (string === reverse) return true;
    else return false;
  }

  // decided to look online for help with recursive functions to find
  // permutations, because it seems to keep coming up and like a thing I should learn about
  function findPermutations(string) {
    if (string.length < 2) return string; // break out of function if string is < 2 chars
    let permutations = [];  // array to hold permutations

    for (let x = 0; x < string.length; x++) {
      let char = string[x];

      // still trying to figure out why this is needed
      // console.log(string.indexOf(char), x);
      if (string.indexOf(char) != x) {
        continue;
      }

      let remainingString = string.slice(0,x) + string.slice(x+1, string.length);
      console.log(remainingString);

      //find permutations recursively until you hit the base case of 2 chars?
      for (let subPermutation of findPermutations(remainingString)) {
        permutations.push(char + subPermutation);
      }
    }
    return permutations;
  }

  // call function to get array of possible character combos/string permutations 
  let permutations = findPermutations(str);
  console.log(permutations);
  for (let y = 1; y < permutations.length; y++) {
    if (testPalindrome(permutations[y]) === true) {
      return true;
    }
  }
  //if true is not returned above, return false
  return false;
}


module.exports = permPalin;

// let str = 'abab';
// console.log(permPalin(str));
// console.log(findPermutations(str));