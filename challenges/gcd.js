/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (a === 0 || b === 0) return 0;
  let smallest = a < b ? a : b;
  while (smallest !== 0) {
    if ((a % smallest === 0) && (b % smallest === 0))  {
      return smallest;
    }
    if (smallest < 0) {
      smallest += 1;
    } else {
      smallest -= 1;
    } 
  }
  return 0; // Should never get here..
}

module.exports = gcd;