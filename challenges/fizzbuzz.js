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

function fizzbuzz(num) {
  // input is a number
  // output an array
  // if num % 3 === 0 buzz, num % 5 === 0 fizz, both fizzbuzz
  // see if we can print
  var array = [];
  // base case
  if (num === 0) {
    return array;
  }
  if (num % 3 === 0) {
    array.unshift('fizz');
  } else if (num % 5 === 0) {
    array.unshift('buzz');
  } else if (num % 3 === 0 && num % 5 === 0) {
    array.unshift('fizzbuzz');
  } else {
    array.unshift(num);
  }
  // calls recursively
  // returns array
  return fizzbuzz(num - 1);
}
console.log(fizzbuzz(10))
module.exports = fizzbuzz;
