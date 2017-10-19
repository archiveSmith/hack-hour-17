/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b, divisor = a > b ? b : a) {
  if (a % divisor === 0 && b % divisor === 0) return divisor;
  if (a % divisor !== 0 || b % divisor !== 0) return gcd(a, b, divisor - 1);
  return divisor;
}

module.exports = gcd;

// console.log(gcd(10, 8)); // => 2
// console.log(gcd(10, 9)); // => 1
// console.log(gcd(10, 4)); // => 2
// console.log(gcd(10, 5)); // => 5
// console.log(gcd(10, 20)); // => 10
// console.log(gcd(45, 75)); // => 15

