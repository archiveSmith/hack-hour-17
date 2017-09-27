/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // every number on power 0 is 1 
    if (power === 0) return 1;
    // power on one returns a base
    if (power === 1) return base;
    // recursion
    if (power >= 2) return base * pow(base, power - 1);
    // for negative numbers
    if (power < 0) return 1 / (base *   pow(base, power + 1));
}

module.exports = pow;
