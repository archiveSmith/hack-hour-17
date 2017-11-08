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
  const arr = string.split('');
  const result = [];
  const length = string.length;
  for (let j = 0; j < length; j += 1) {
    for (let i = 0; i < length - 1; i += 1) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      result.push(arr.join(''));
    }
  }
  return result;
}

// console.log(anagrams('abcd'));

module.exports = anagrams;
