/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    for(let i=a; i>=0; i--) {
      if(Math.abs(a)%i===0 && Math.abs(b)%i === 0) {
        return i
      }
    }
    }

module.exports = gcd;