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
    const brackets = ['[', ']', '{', '}', '(', ')'];
    let tempArr = input.split('');
    
    let squareB = input.match(/[\[\]]/g);
    let curlyB = input.match(/[\{\}]/g);
    let parens = input.match(/[\(\)]/g);
    
    if (squareB === null) squareB = '';
    if (curlyB === null) curlyB = '';
    if (parens === null) parens = '';
    

    if (squareB[0] === ']' || curlyB[0] === '}' || parens[0] === ')') return false;
    if (squareB[squareB.length - 1] === '[' || curlyB[curlyB.length - 1] === '{' || parens[parens.length - 1] === '(') return false;

    let count = 0;
    let result = true;

    for (let i = 0; i < squareB.length; i++) {
        if (squareB[i] === '[') count++;
        if (squareB[i] === ']') count--;
        if (count < 0) return false;    
    }

    if (count !== 0) return false;

    count = 0;
    
    for (let i = 0; i < curlyB.length; i++) {
        if (curlyB[i] === '{') count++;
        if (curlyB[i] === '}') count--;
        if (count < 0) return false;    
    }

    if (count !== 0) return false;

    count = 0;
    
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') count++;
        if (parens[i] === ')') count--;
        if (count < 0) return false;    
    }
    if (count !== 0) return false;
    
    return true;
}

module.exports = balancedParens;
