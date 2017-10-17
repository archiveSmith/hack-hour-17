/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function cd(num) {
    const commonDivisor = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            commonDivisor.push(num/i);
        }
    }
    return commonDivisor;
}
function gcd(a, b) {
    // check if a and b are integers
    if (!Number.isInteger(a) && !Number.isInteger(b)) return 0;
    // create a function to find the common divisors of that number
    // use the commonDivisor function for both a and b input values to get the common divisor for both numbers
    const commonDivisorA = cd(a);
    const commonDivisorB = cd(b);
    
    const sameDivisor = [];
    
    commonDivisorA.forEach( numberA => {
        commonDivisorB.forEach((numberB) => {
            console.log(numberA, numberB);
            if (numberA === numberB) sameDivisor.push(numberA);
        })
    })

    // console.log(sameDivisor);
    return sameDivisor[0];

}


module.exports = gcd;