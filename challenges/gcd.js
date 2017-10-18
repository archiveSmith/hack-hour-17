/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let arr = [a,b];

  arr.sort(function(a,b) {
    return a-b;
  });
  
  for (let x = arr[0]; x > 0; x -=1) {
    if (arr[1] % x === 0 && arr[0] % x === 0) {
      return x;
    }
  }
}

module.exports = gcd;

// console.log(gcd(50, 5));