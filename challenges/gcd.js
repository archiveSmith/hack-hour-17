/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let divisorA = [];
    let divisorB = [];

    //divisors of a
    for (let i = 0; i < a; i += 1) {
        if (a % i === 0) {
            divisorA.push(i)
        }
    }
    // divisors of b
    for (let j = 0; j < b; j += 1) {
        if (b % j === 0) {
            divisorB.push(j)
        }
    }

    let divisors = divisorA.concat(divisorB);
    divisors.sort((a, b) => {
        return a - b

    });
    // console.log(divisors)
    let duplicates = []
    for (let i = 0; i < divisors.length; i += 1) {
        if (divisors[i] === divisors[i + 1]) {
            duplicates.push(divisors[i]);
        }
    }
    let max = duplicates.reduce(function (a, b) {
        return Math.max(a, b);
    });

    return max;


}

module.exports = gcd;