/* Write a function that calculates x^y, where x is given as the base and y is given as the exponent.
 * Use recursion!
 */

function pow(base, power) {
	if (!isFinite(base) || !Number.isInteger(power) || (base === 0 && power === 0)) {
	  return 'invalid input';
	  } else if (power === 0) {
	    return 1;
	  } else if (power > 0) {
	    return base * pow(base, power - 1);
	  } else if (power < 0) {
	    return base * pow(base, power + 1) / (-1 * power);
	  }
}

module.exports = pow;
