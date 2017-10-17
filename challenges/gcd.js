/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (!Number.isInteger(a) && !Number.isInteger(b))
        return undefined;

    let largest = 1;
    // less complicated, building up to the gcd
    for (let i = 2; i < Math.min(a, b) / i; i++)
        if (a % i === 0 && b % i === 0)
            largest = i;

    return largest;
}

console.log(gcd(10, 8)) // -> 2
console.log(gcd(10, 9)) //-> 1

module.exports = gcd;