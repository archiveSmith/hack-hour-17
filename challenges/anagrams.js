/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * let result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  if (string.length < 2) {
    return [string];
  } else {
    let result = [];
    let before, focus, after;
    let shortWord, subAnagrams, newEntry;

    for (let i = 0; i < string.length; i++) {
      before = string.slice(0, i);
      focus = string[i];
      after = string.slice(i + 1, string.length + 1);
      shortWord = before + after;

      subAnagrams = anagrams(shortWord);
      
      for (let j = 0; j < subAnagrams.length; j++){
        newEntry = focus + subAnagrams[j];
        result.push(newEntry);
      }

  }
  return result;

}
        
        
    

}

module.exports = anagrams;
