/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// iterative
// function gcd(a, b) {
//     if (!Number.isInteger(a) && !Number.isInteger(b))
//         return undefined;

//     let largest = 1;

//     // less complicated, building up to the gcd
//     for (let i = 2; i <= Math.min(a, b); i++)
//         if (a % i === 0 && b % i === 0)
//             largest = i;

//     return largest;
// }

// recursive, using Euler's algo!
function gcd (a, b) {
  if (!Number.isInteger(a) && !Number.isInteger(b)) { return undefined; }
  if (a === 0 || b === 0) { return 0; }
  if (a === 1 || b === 1) { return 1; }
  if (a === b) { return a; }

  const large = Math.max(a, b);
  const small = Math.min(a, b);
  return gcd(large - small, small);
}

// console.log(gcd(10, 8)) // -> 2
// console.log(gcd(10, 9)) //-> 1
// console.log(gcd(252, 105))
// console.log(gcd(24, 6))

module.exports = gcd;
