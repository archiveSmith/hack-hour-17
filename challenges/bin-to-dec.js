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

 // BINARY TO DECIMAL
	// find length of binary (11 ==> 2)
	// find 2 to the power of binary.length - 1 (2^0 = 1, 2^1 = 2)
	// if binary[i] == 1, add to sum (1 + 2 = 3)
	// return sum (ret 3)

function binToDec(binary) {
	if(binary.length === 0 || binary == 0) return 0;
	if(binary.length === 1) return 1;
	let decNum = 0;
	for(let i = 0, j = binary.length - 1; i < binary.length; i++, j--){
		if(binary[i] != 0) decNum += Math.pow(2,j);
	}
	return decNum;
}

// ==== //
// TEST //
// ==== //
// console.log('"0" => 0 => ', binToDec('0')); //   -> 0
// console.log('"1" => 1 => ', binToDec('1')); // -> 1
// console.log('"11" => 3 => ', binToDec('11')); //  -> 3
// console.log('"100" => 4 => ', binToDec('100')); // -> 4
// console.log('"101" => 5 => ', binToDec('101')); // -> 5
// console.log('"0101" => 5 => ', binToDec('0101')); // -> 5

module.exports = binToDec;
