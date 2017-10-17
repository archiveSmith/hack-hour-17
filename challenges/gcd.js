/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // input 2 numbers
  // output an integer that is the greatest common number that can be divided evenly
  // a % div = 0 && b % div = 0
  // iterate downward from the smallest integer take the first that is evenly divisible by both
  let smallest = a <= b ? a : b;
  for (i = smallest; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
}
console.log(gcd(20, 10));
module.exports = gcd;