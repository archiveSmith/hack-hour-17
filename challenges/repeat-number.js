/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
/**
 * 1, 2, 3, 4, 5, 3
 */

 if (!Array.isArray(array)) return;
 let copyArray = Array.from(array);
 let sameVal;

 copyArray = copyArray.sort((a, b) => a - b);

 for (let i = 0; i < copyArray.length; i += 1) {
     if (copyArray[i] === i) {
         sameVal = i;
         break;
     }
 }

 return sameVal;

}

console.log(repeatNumbers([1, 4, 3, 2, 5, 3]));

module.exports = repeatNumbers;
