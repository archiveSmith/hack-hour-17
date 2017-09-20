/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // if power is an integer
  if (power === Math.floor(power)) {
    if (power === 0) {
      return 1;
    } else if (power > 0) {
      return base * pow(base, power - 1);
    // if power is negative
    } else if (power < 0) {
      power = Math.abs(power);
      return 1 / (base * pow(base, power - 1));
    }
  // if power is a decimal
  } else {
    let denominator = 10;
    let numerator = power * denominator;
    if (numerator === 0) {
      return 1;
    } else {
      return base * pow(base, numerator - 1);
    }
  }
}

module.exports = pow;

console.log(pow(3,-3))
console.log(Math.pow(3,-3))
console.log(1/16)
console.log('log', Math.log10(1024) / Math.log10(10))


