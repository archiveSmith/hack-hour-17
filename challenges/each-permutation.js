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


const eachPermutation = function(array, callback) {
  getPermutations(array).forEach(callback);
};

const getPermutations = function(array) {
  if (array.length === 1) return [array];
  const permutations = [];

  array.forEach((currentElement, index) => {
    const permutationsExcludingCurrent = getPermutations([
      ...array.slice(0, index),
      ...array.slice(index + 1)
    ]);


    const permutationsWithCurrentAtFront = permutationsExcludingCurrent.map(perm => [
      currentElement,
      ...perm
    ]);

    permutations.push(...permutationsWithCurrentAtFront);
  });

  return permutations;
};

module.exports = eachPermutation;
