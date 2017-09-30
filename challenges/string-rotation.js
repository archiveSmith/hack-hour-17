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
  //find which string is longer
  if (s1.length!==s2.length)
  return isSubstring(s1,s2);

    let s1arr = s1.split('');
    let s2arr = s2.split('');

    let sorted1 = s1arr.sort((a,b) => {
      return a.charCodeAt(0)-b.charCodeAt(0);
    })
    let sorted2 = s2arr.sort((a,b) => {
      return  a.charCodeAt(0)-b.charCodeAt(0);
    })
    console.log(sorted1,sorted2)
    return isSubstring(sorted1.join(), sorted2.join())

}

console.log(stringRotation('hello','elloh'));
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
