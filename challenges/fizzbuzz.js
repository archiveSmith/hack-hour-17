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
function fizzbuzz(num) {
  const f = 'fizz';
  const b = 'buzz';
  const fb = f + b;
  // create an empty array
  const result = [];

  // iterate each array number from 1 to number
  for (let i = 1; i <= num; i++) {
    // go through the three condition
    // if a condition pass, push the result to the empty array
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(fb);
    } else if (i % 5 === 0) {
      result.push(b);
    } else if (i % 3 === 0) {
      result.push(f);
    } else {
      result.push(i);
    }
    // otherwise, pussh the result as a regular counting numbe
  }
  // return the empty array
  return result;
}

console.log(fizzbuzz(16));
module.exports = fizzbuzz;
