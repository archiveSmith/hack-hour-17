/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // power NOT number, or base NOT number return -1
  if (!Number.isInteger(power) || !Number.isInteger(base)) return -1;
  // if power is 0, return base;
  if (power === 0) return 1;
  if (power === -1) return 1 / base;

  return (power > 0) ? base * pow(base, power - 1) : (1 / base) * pow(base, power + 1);
}


// console.log(pow(2, 0));
// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));
// console.log(pow(2, -1));
// console.log(pow(-2, -2));


 // console.log(pow(2, 0));
 // console.log(pow(2, -1));
 // console.log(pow(2, -2));
 // console.log(pow(2, -3));
 // console.log(pow(2, -4));
 // console.log(pow(-2, -1));
 // console.log(pow(2, -2));
module.exports = pow;
