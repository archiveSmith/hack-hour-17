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
    const obj = {};
    let count = 0;
    if (str.length === 0) return false;

    for (var i = 0; i < str.length; i++){
        if (!obj[str[i]]) obj[str[i]] = 1;
        else obj[str[i]]++;
    }
    
    for (let j in obj){
        if (obj[j] % 2 !== 0 ) count++;
        if (count > 1) return false;
    }
    return true;
}

module.exports = permPalin;