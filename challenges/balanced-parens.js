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
    const string = input.split('');
    const parens = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '[' || string [i] === '(' || string [i] === '{') {
            parens.push(string[i]);
        }
            
        else if (string[i] === ')') {
            if (parens[parens.length-1] === '(') {
                parens.pop();
            } else {
                return false;
            }
        } else if (string[i] === '}') {
            if (parens[parens.length-1] === '{') {
                parens.pop();
            } else {
                return false;
            }
        } else if (string[i] === ']') {
            if (parens[parens.length-1] === '[') {
                parens.pop();
            } else {
                return false;
            }
        }
    }

    if(parens.length !== 0)
        return false;
    else
        return true;
}

module.exports = balancedParens;
