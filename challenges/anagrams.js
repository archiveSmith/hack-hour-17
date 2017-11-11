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

function anagrams(string) {
  if (string.length === 1) {
    return string;
  }
  let anagram = []
  for (let i=0; i<string.length; i+=1) {
    let first = string[0]
    let comb = anagrams(string.slice(1, string.length));

    for (let j=0; j<comb.length; j+=1) {
      anagram.push(first + comb[j])
    }
    string = string.substr(1, string.length - 1) + first
  }
  return anagram
}

module.exports = anagrams;
