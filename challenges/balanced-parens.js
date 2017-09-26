/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
	const inArr = input.split('');
	const brackets = inArr.reduce((acc, char, i) => {
		if(char === '['|| char === '{'|| char === '(') acc.push(char);
		else if(char === ']'|| char === '}'|| char === ')'){
			switch(char){
				case ']':
					if(acc[acc.length-1] == '[') acc.pop();
					break;
				case '}':
					if(acc[acc.length-1] == '{') acc.pop();
					break;
				case ')':
					if(acc[acc.length-1] == '(') acc.pop();
					break;
				default:
					break;
			}
		}
		return acc;
	}, []);
	if(brackets.length > 0) return false;
	return true;
}


// ========== //
// TEST CASES //
// ========== //
// console.log('THESE SHOULD BE TRUE: ');
// console.log(balancedParens('()')); // true
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log('');
// console.log('THESE SHOULD BE FALSE: ');
// console.log(balancedParens('('));  // false
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('[(]{)}')); // false
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;
