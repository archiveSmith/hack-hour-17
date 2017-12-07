/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutation (arr, callback) {
  function findPerms (array) {
    if (!Array.isArray(array)) { return undefined; }
    if (array.length === 0) { return [[]]; }
    if (array.length === 1) { return [array]; }
    const perms = [];
    array.forEach((val, i) => findPerms(array.slice(0, i).concat(array.slice(i + 1)))
      .forEach((perm) => {
        perms.push([...perm, val]);
      }));
    return perms;
  }

  findPerms(arr).forEach(callback);
}

// console.log(eachPermutation([1, 2, 3], function (perm) {
//   console.log(perm);
// }));

module.exports = eachPermutation;
