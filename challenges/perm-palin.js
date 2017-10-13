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
        if(str.length === 1 || str.length === 0) {
            return true;
        }
        if(str[0] === str[str.length-1]) {
           return permPalin(str.slice(1,str.length-1))
    }
    return false;
    }

module.exports = permPalin;