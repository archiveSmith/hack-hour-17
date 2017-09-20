/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	if(isNaN(base) || isNaN(power) || (base === 0 && power === 0)) return;
	if(base === 0) return 0;
	if(base === 1 || power === 0) return 1;
	if(power === 1) return base;
	let result = base;
	for(let i = 1; i < power; i++){
		result *= base;
	}
	return result;
}

// ==========
// TEST CASES
// ==========
// console.log('(27) ==> ',pow(3,3));
// console.log('(9) ==> ',pow(3,2));
// console.log('(16) ==> ',pow(4,2));
// console.log('(64) ==> ',pow(2,6));
// ===== EDGE CASES
// console.log('(3) ==> ',pow(3,1));
// console.log('(undefined) ==> ',pow('a',1));
// console.log('(undefined) ==> ',pow(1,'a'));
// console.log('(1) ==> ',pow(1,10));
// console.log('(1) ==> ',pow(10,0));
// console.log('(0) ==> ',pow(0,10));

module.exports = pow;
