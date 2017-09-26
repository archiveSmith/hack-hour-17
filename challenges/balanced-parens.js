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
    var counts = {
        square: 0,
        curly: 0,
        parens: 0,
        lastSquare: {curly: 0, parens: 0},
        lastCurly: {square: 0, parens: 0},
        lastParens: {square: 0, curly: 0}
    };
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '[') {
            counts.square++;
            counts.lastSquare.curly = counts.curly;
            counts.lastSquare.parens = counts.parens;
        };
        if (input[i] === ']') {
            if (counts.curly === counts.lastSquare.curly && counts.parens === counts.lastSquare.parens) counts.square--
            else return false;
        };
        if (input[i] === '{') {
            counts.curly++;
            counts.lastCurly.square = counts.square;
            counts.lastCurly.parens = counts.parens;
        };
        if (input[i] === '}') {
            if (counts.square === counts.lastCurly.square && counts.parens === counts.lastCurly.parens) counts.curly--
            else return false;
        };
        if (input[i] === '(') {
            counts.parens++;
            counts.lastParens.square = counts.square;
            counts.lastParens.curly = counts.curly;
        };
        if (input[i] === ')') {
            if (counts.square === counts.lastParens.square && counts.curly === counts.lastParens.curly) counts.parens--
            else return false;
        };
        if (counts.square === -1 || counts.curly === -1 || counts.parens === -1) return false;
    }
    return counts.square === 0 && counts.curly === 0 && counts.parens === 0;
}

module.exports = balancedParens;
