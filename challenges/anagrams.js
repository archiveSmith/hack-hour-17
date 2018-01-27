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

  function anagrams(str) {
    const result = [];
    
    for (let i = 0; i < str.length; i += 1) {
      let combo = '';
      let extracted = str[i];
      let rest = str.slice(0, i) + (str.length - i === 1 ? '' : str.slice(i + 1));
      console.log('rest', rest);
      combo += extracted + innerFunc(rest);
      result.push(combo);
    }
    
    function innerFunc(str2) {
      console.log('inside', str2);
      const len = str2.length;
      if (len === 1) return str2;
      for (let i = 0; i < len; i += 1) {
        let combo = '';
        let extracted = str2[i];
        console.log('extract', extracted);
        let rest = str2.slice(0, i) + (str2.length - i === 1 ? '' : str2.slice(i + 1));
        console.log('rest2', rest);
        combo += extracted + innerFunc(rest);
        return combo;
      }
    }
    return result;
  }

module.exports = anagrams;
