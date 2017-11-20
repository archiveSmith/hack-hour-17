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

// Refactored code from here a little lol sigh: https://stackoverflow.com/questions/9960908/permutations-in-javascript/37580979#37580979

function anagrams(string) {
  let arr = string.split('');
  let length = arr.length,
      result = [string],
      c = new Array(length).fill(0),
      i = 1, k;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      [arr[i], arr[k]] = [arr[k], arr[i]];
      c[i] += 1;
      i = 1;
      result.push(arr.join(''));
    } else {
      c[i] = 0;
      i += 1;
    }
  }
  return result;
}

module.exports = anagrams;
