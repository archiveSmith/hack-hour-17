/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let low = (a <= b) ? a : b,
   high = (b >= a) ? b : a;

if (high % low === 0)
  return low;
  for (let i = Math.floor(low/2); i>=1; i--) {
    if (low % i === 0 && high % i === 0)
      return i;
  }
}

module.exports = gcd;
