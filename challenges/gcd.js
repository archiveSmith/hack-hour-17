/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return;
  let min = Math.min(a, b),
      max = Math.max(a, b);

  if (max % min === 0) return min;

  for (let i = Math.floor(min / 2); i >= 2; i -= 1) {
      if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
}

module.exports = gcd;
