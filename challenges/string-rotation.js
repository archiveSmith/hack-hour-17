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
  // input two strings, one base and the second a potential rotation of the first
  // output true or false, if second string is a rotation of first
  // rotate the first string
    // slice into two segments
    // iterate through first string and slice
    // concat the two segments and push to container array
  const rotatedStrings = [];
  for (let i = 0; i < s1.length; i++) {
    let seg1 = s1.slice(0,i);
    let seg2 = s1.slice(i);
    let rotatedStr = seg2 + seg1;
    rotatedStrings.push(rotatedStr)
    console.log(rotatedStr);
  }
  for (let i = 0; i < rotatedStrings.length; i++) {
    let rotatedStr = rotatedStrings[i];
    if (s2 === rotatedStr) {
      return true;
    }
  }
  return false;
}
// console.log(stringRotation('code', 'code'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
