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

//concat s2 to itself then run isSubstring.

  if (s1.length !== s2.length) {
    return false;
  }
  if (s1 === s2) {
    return true;
  }

  return isSubstring(s2.concat(s2), s1);

//determine potential shift
// let shift;
// for (let i = 0; i < s2.length; i++) {
//   if (s2.charAt(i) === s1.charAt(0)) {
//     shift = i;
//   }
// }

//could check concatinating strings...
// let partTwo = s2.slice(shift);
// let partOne = s2.slice(0,shift);

// if (partTwo.concat(partOne) === s1) {
//   return true;
// }

// return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};