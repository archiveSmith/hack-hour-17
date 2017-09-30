/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  //edge cases
  if (s1.length !== s2.length) return false;
  if (typeof s1 !== 'string' && typeof s2 !== 'string') return false;
  //split string
  s1Arr = s1.split('');
  s2Arr = s2.split('');
  //check to see if s1 is spelled out in s2 sequentially
  //match the first value of s1 in s2
  let temp = [];
  let idx = s2Arr.indexOf(s1Arr[0]);
  temp.push(s2Arr[idx]);
  s2Arr.splice(idx, 1);
  //then start iterating through the string and match if s1[1] === s2[index where we found s1[1]]
  return s1 === temp.join('');
}

console.log(stringRotation('hello', 'llohe'));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
