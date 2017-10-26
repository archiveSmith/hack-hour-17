// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

// input: data a number
// output: return array of number or string of fizz, buzz, or fizz buzz based on certain conditions
// condition: divisble by 3 => replace with fizz
// condition: divisible by 5 => replace with buzz
// condition: divisible by 3 & 5 => replace fizzbuzz

/**
 * 
 * @param {*} num
 * 
 * Pseudocode (lower level)
 * 
 * 
 * Print 'fizz', 'buzz', 'fizzbuzz', or the number as appropriate
 * 
 *   takes in a number as an input
 *   declare an array to return
 *   declares an empty string to possibly add in place of the number
 *   if the number is divisible by 3, add 'fizz' to the string
 *   if the number divisible by 5, add 'buzz' to the string.
 *   if the string is truthy (not still empty), add the string to the array
 *   if the string is still empty, add the number to the array instead
 * 
 *   return the array 
 */
function fizzbuzz(num) {
  let resultArr = [];
  let currString = '';

  for (let i = 1; i <= num; i += 1) {
    if (i % 3 === 0) currString += 'fizz';
    if (i % 5 === 0) currString += 'buzz';
    if (currString) resultArr.push(currString);
    else resultArr.push(i);
    currString = '';
  }

  return resultArr;
}

// console.log(fizzbuzz(16));
module.exports = fizzbuzz;