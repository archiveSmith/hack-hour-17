/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  
  //basecase: power = 0;
  if (power === 0) return 1;
  //multiple the base by the result & decrement power
  return base * pow(base, power - 1);
}

module.exports = pow;

