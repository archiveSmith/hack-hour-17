/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

let total = base;

function calcPow(base,power,total) {
    // base case: when power is down to 1, return total
    if (power === 1) return total;
    // while power is greater than 1, multiply running total by base
    else if (power > 1) {
        total = total * base;
    }
    // continue to call calcPow and mutiply total by base while power is greater than 1
    return (calcPow(base, power-1,total));
}

return (calcPow(base, power, total));

}

// module.exports = pow;
console.log(pow(4,5));
