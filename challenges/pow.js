/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    // every number on power 0 is 1 
    if (power === 0) return 1;
    // base case is when power is 1, that's returning a base
    if (power === 1) return base;
    // recursion
    if (power >= 2) return base * pow(base, power - 1);
}

module.exports = pow;
