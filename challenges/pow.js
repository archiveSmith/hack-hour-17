/* Write a function that calculates x^y,
 * where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, current) {
  if (current === undefined && power === 0) {
    return 1;
  }
  if (current === undefined) {
    current = base;
  }
  if (current && power === 1) {
    return current;
  }
  current *= base;
  return pow(base, power - 1, current)
}

module.exports = pow;
