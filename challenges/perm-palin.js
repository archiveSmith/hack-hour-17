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
	let strArr = str.split(''),
			checkObj = {};

			strArr.forEach(element => {
				if (checkObj[element])
					delete checkObj[element];
					else {
						checkObj[element]=1;
					}
			})
	let size = Object.keys(checkObj).length;
		if (size <= 1)
				return true;
				else {
					return false;
				}

}

module.exports = permPalin;
