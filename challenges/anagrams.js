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
  if (string.length <= 1) return [string];
  
  const anagramsSet = new Set();
  
  string.split('').forEach((currentLetter, i) => {
    const slicedString = string.slice(0, i) + string.slice(i + 1);
    const incompleteAnagrams = anagrams(slicedString);
    incompleteAnagrams.forEach(anagram => anagramsSet.add(currentLetter + anagram));
  });
    
  return Array.from(anagramsSet);
};

module.exports = anagrams;

console.log(anagrams(''));
