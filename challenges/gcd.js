/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
}

// function gcd(a, b) {
//     var r = 0;
//     while (a !== 0) {
//       r = b % a;
//       b = a;
//       a = r;
//     }
//     return b;
//   }

module.exports = gcd;