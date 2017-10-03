/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function zeros(digit) {
	switch (digit) {
		case 1: return 'I';
		case 2: return 'II';
		case 3: return 'III';
		case 4: return "IV";
		case 5: return 'V';
		case 6: return 'VI';
		case 7: return 'VII';
		case 8: return 'VIII';
		case 9: return 'IX';
	}
}

function tens(digit) {
	switch (digit) {
		case 1: return 'X';
		case 2: return 'XX';
		case 3: return 'XXX';
		case 4: return "XL";
		case 5: return 'L';
		case 6: return 'LX';
		case 7: return 'LXX';
		case 8: return 'LXXX';
		case 9: return 'XC';
	}
}

function hundreds(digit) {
	switch (digit) {
		case 1: return 'C';
		case 2: return 'CC';
		case 3: return 'CCC';
		case 4: return "CD";
		case 5: return 'D';
		case 6: return 'DC';
		case 7: return 'DCC';
		case 8: return 'DCCC';
		case 9: return 'CM';
	}
}

function thousands(digit) {
	switch (digit) {
		case 1: return 'M';
		case 2: return 'MM';
		case 3: return 'MMM';
		case 4: return "MV";
		case 5: return 'V';
		case 6: return 'VM';
		case 7: return 'VMM';
		case 8: return 'VMMM';
		case 9: return '?';
	}
}


function romanNumeral(n) {
	debugger;
	let length = n.toString().length;
	let roman = '';
	for (var i = 0; i < length; i++) {
		if (i === 0) roman = zeros(n % 10) + roman;
		if (i === 1) roman = tens(n % 10) + roman;
		if (i === 2) roman = hundreds(n % 10) + roman;
		if (i === 3) roman = thousands(n % 10) + roman;

		n = Math.floor(n / 10);
	}

}

console.log(romanNumeral(1943));

//module.exports = romanNumeral;
