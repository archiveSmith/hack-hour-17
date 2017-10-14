/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let count = {};
    for (let i = 0; i < str.length; i += 1) {
        count[str[i]] = !count[str[i]] ? 1 : count[str[i]] + 1;
    }
    let countOdd = 0;

    for (let i in count) {
        if (count[i] % 2) {
            countOdd++;
        }
    }

    return countOdd <= 1;
}

module.exports = permPalin;