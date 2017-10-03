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
	var openedStack = [];

	for (var i = 0; i < input.length; i++) {
		if (input[i] === '(' || input[i] === '[' || input[i] === '{') { // it's an opener
			openedStack.push(input[i]); // push to stack
		} else if (input[i] === ')' || input[i] === ']' || input[i] === '}') { // its a closer
			if (input[i] === openedStack[openedStack.length - 1]) {
				openedStack.pop(); // pop from stack
			} else {
				return false;
			}
		}
	}
	return openedStack.length === 0;
}

// function balancedParens(input) {
// 	var lastOpened = input[0];
// 	for (var i = 1; i < input.length; i++) {
// 		if ( input[i] === openToClosed.lastOpened) { // if closing matches
// 			return true;
// 		} else if (input[i] === '(' || input[i] === '[' || input[i] === '{') { // if another opening
// 			balancedParens(input.slice(i));
// 		} else { // if another random character
//
// 		}
// 	}
// 	return false;



	// iterate through
	// if char is another opening, recurse
	// if char is closing, and matches lastOpened, exit recursing (return true?)
	// if char is closing, and doesn't match, return false;






//module.exports = balancedParens;
