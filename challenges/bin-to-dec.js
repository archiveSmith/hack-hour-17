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

 var pow = require("./pow.js");


function binToDec(binary) {
    let string = binary.toString();
    let fraction;
    if (string.split('.').length === 2) {
        fraction = string.split('.')[1];
        string = string.split('.')[0];
    }
    let result = resultFraction = 0;
    for (let i = 0; i < string.length; i++) {
        let curr = string[string.length - 1 - i];
        if (curr !== '0' && curr !== '1') return;  // invalid binary
        result += pow(2, i) * parseInt(curr);
    }
    if (fraction) {
        for (let j = 0; j < fraction.length; j++) {
            let currFrac = fraction[j];
            if (currFrac !== '0' && currFrac !== '1') return;  // invalid binary
            resultFraction += pow(2, (j + 1) * -1) * parseInt(currFrac);
        }
    }
    if (resultFraction) result += resultFraction;
    return result;
}

console.log(binToDec('11001'));

function decToBin(decimal, currentPlace) {
    let string = decimal.toString();
    let fraction;

    // Not gonna bother with decimal binaries for now
    // if (string.split('.').length === 2) {
    //     fraction = string.split('.')[1];
    //     string = string.split('.')[0];
    // }

    let start = parseInt(string);


    if (start === 1 || start === 0) {
        start = start.toString();
        if (currentPlace && currentPlace != 0) {
            for (let k = 0; k < currentPlace - 1; k++) {
                start += '0';
            }
        }
        return start;
    }

    let largestBinary = 0;
    while (start % pow(2, largestBinary) < start) {
        largestBinary++;
    }

    let remaining = start - (pow(2, largestBinary - 1 ) * Math.floor(start / pow(2, (largestBinary - 1))));
    let result = (Math.floor(start / pow(2, (largestBinary - 1)))).toString() + decToBin(remaining, largestBinary - 1);
    return result;
}

console.log(decToBin('12'));

module.exports = binToDec;
