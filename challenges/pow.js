/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  based = base;
  if (power===0) return 1;
  return base * pow(base,power-1);
}

console.log(pow(2,5));
module.exports = pow;
