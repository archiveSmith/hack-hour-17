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
    const strArr = str.split('');
    const accLetters = {}

    for(index in strArr) {
        if(accLetters[strArr[index]] !== 1)
            accLetters[strArr[index]] = 1;
        else
            accLetters[strArr[index]] = 0;
    }

    let unmatched = Object.keys(accLetters).reduce((acc, val) => acc + accLetters[val], 0);

    if(unmatched > 1)
        return false;
    else
        return true;
}

// console.log([
// permPalin('abab'), //=> true
// permPalin('cbaba'), //=> true
// permPalin('cbac'), //=> false
// permPalin('a') //=> true
// ]);

module.exports = permPalin;