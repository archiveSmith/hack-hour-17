/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (typeof base !== 'number' || typeof power !== 'number') return;
    if (power === 0) return 1;
    if (Number.isInteger(power)) {
        if (power < 0) {
            return 1 / pow(base, power * -1);
        }
        if (power > 0) {
            return power === 1 ? base : base * pow(base, power - 1);
        }
    }
    else {
        // decimal/fractional exponents
        let fraction = crappyToFraction(power);
        return answer = parseFloat(pow(nthRoot(base, base, fraction.denominator), fraction.numerator).toFixed(3));
    }
}

function nthRoot(base, curr, power) {
    // https://en.wikipedia.org/wiki/Nth_root_algorithm
    let next = (1 / power) * (((power - 1) * curr) + (base / (pow(curr, power - 1))));
    while (parseFloat((curr).toFixed(5)) !== parseFloat((next).toFixed(5))) {
        curr = next;
        next = nthRoot(base, curr, power);
    }
    return next;
}

function crappyToFraction(decimal) {
    let decimalPlaces = decimal.toString().split('.')[1].length;
    let fraction = {};
    if (decimalPlaces === 1) {
        fraction.numerator = decimal * 10;
        fraction.denominator = 10;
    }
    else if (decimalPlaces === 2) {
        fraction.numerator = decimal * 100;
        fraction.denominator = 100;
    }
    else {
        fraction.numerator = parseFloat((decimal).toFixed(3)) * 1000;
        fraction.denominator = 1000;
    }
    return fraction;
}

console.log(pow(-3, 2));

module.exports = pow;
