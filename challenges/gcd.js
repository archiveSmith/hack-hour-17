/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let smaller = Math.min(a, b);
  let bigger = Math.max(a, b);
  let gcd = 1;
  for (let i = 2; i <= smaller; i += 1) {
    if (smaller % i === 0 && bigger % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

module.exports = gcd;