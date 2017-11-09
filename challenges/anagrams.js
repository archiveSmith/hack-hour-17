/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const anagrams = (string, start = '') => {
  // base case
  if (string.length === 1) {
    return [start + string];
  } else {
    var returnResult = [];
    for (var i = 0; i < string.length; i++) {
      var result = anagrams(string.substr(0, i) + string.substr(i + 1), string[i]);
      for (var j = 0; j < result.length; j++) {
        returnResult.push(start + result[j]);
      }
    }

    return returnResult;
  }
};

// console.log('6 =>', anagrams('123'));

module.exports = anagrams;
