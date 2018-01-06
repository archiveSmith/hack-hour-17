/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')    -> 0
 * 	binToDec('11')   -> 3
 * 	binToDec('100')  -> 4
 * 	binToDec('101')  -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
	// the easy way...
	// let result = parseInt(binary, 2);
	// return result;

	const length = binary.length;
	let result = 0;

	for (let i = 0; i < length; i++) {
		if (binary[i] === '1') {
		result += Math.pow(2, length - 1 - i);
		}
	}
	return result;
}

function decToBin(decimal) {
	let quotient = Number(decimal);
	if (quotient === '0') return '0';
	let result = '';
	while (quotient) {
		result += quotient % 2;
		quotient = Math.floor(quotient / 2);
	}
	return result.split('').reverse().join('');
}

module.exports = binToDec;
