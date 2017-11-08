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

function anagrams (string) {
  if (string.length <= 1) { return [string]; }
  const grams = {};
  for (let i = 0; i < string.length; i += 1) {
    const availLetters = string.substring(0, i) + string.substring(i + 1);
    let gram = anagrams(availLetters).map((combos) => [string[i], ...combos]);
    for (let prop of gram) {
      grams[prop] = true;
    }
  }

  return Object.keys(grams);
}

// console.log(anagrams('abcc'));

module.exports = anagrams;
