/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */


function binToDec(binary) {
	if (typeof binary !== 'string' || binary === '') return undefined;

	let arr = binary.split('').reverse();
	let res = 0;
	let bin = 1;

	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] === '1') {
			res += bin;
			bin *= 2;
		} else {
			bin *= 2;
		}
	}
	return res;
}

module.exports = binToDec;
