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
    if (str.length <= 1) return true;
    
    let oddAlready = false;

    for (let i = 0; i < str.length; i += 1) {
        let re = new RegExp(str[i], 'g');
        let temp = str.match(re).length;
        if (temp % 2 === 1 && oddAlready) return false;
        if (temp % 2 === 1) oddAlready = true;
    }
    return true;
}

module.exports = permPalin;