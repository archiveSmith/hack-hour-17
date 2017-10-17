/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let size = a;
  if (a > b) { size = b; }
  const divisorA = [];
  const divisorB = [];
  for (let i = 1; i <= size; i += 1) {
    if (a % i === 0) { divisorA.push(i); }
    if (b % i === 0) { divisorB.push(i); }
  }
  // console.log(divisorA, divisorB);
  const cache = {};
  let length = divisorA.length;
  if (divisorB.length > divisorA.length) {
    length = divisorB.length;
  }
  for (let j = 0; j < length; j += 1) {
    if (cache[divisorA[j]]) {
      cache[divisorA[j]] += 1;
    } else { cache[divisorA[j]] = 1; }
    if (cache[divisorB[j]]) {
      cache[divisorB[j]] += 1;
    } else { cache[divisorB[j]] = 1; }
  }
  // console.log(cache)
  let largestDivisor;
  const keys = Object.keys(cache);
  // console.log(keys)
  for (let k = 0; k < keys.length; k += 1) {
    if (cache[keys[k]] > 1) { largestDivisor = keys[k]; }
  }
  return largestDivisor;
}

// gcd(10, 8);

module.exports = gcd;
