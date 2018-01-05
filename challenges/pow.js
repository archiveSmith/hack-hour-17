/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  function negPow(b, p) {
    if (p === 0) return 1;
    return (1 / b) * negPow(b, p + 1); 
  }
  function posPow(b, p) {
    if (p === 0) return 1;
    return b * posPow(b, p - 1); 
  }
  if (power < 0) return negPow(base, power);
  else return posPow(base, power);
}

module.exports = pow;
