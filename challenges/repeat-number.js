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
  const duplicate = array.reduce((acc, curr, i, arr) => {
    if (arr.indexOf(curr) !== i && acc.indexOf(curr) < 0) acc.push(curr);  
    return acc;
  }, []);
  return duplicate[0];
}

module.exports = repeatNumbers;

// let test = [1, 2, 3, 3, 5];
// console.log(repeatNumbers(test));
