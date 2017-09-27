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

<<<<<<< HEAD
function balancedParens(input) {
    let array = [];
    let pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    let closedParens = {
        ')': true,
        ']': true,
        '}': true
    };

    for (let i = 0; i < input.length; i += 1) {
        if (pairs[input[i]]) {
            array.push(input[i]);
        } else if (closedParens[input[i]]) {
            if (pairs[array.pop()] !== input[i]) return false;
        }
    }
    return array.length === 0;
=======
function balancedParens(input){

>>>>>>> 87f06dc0d55fb788bfa384c8ef02a514745661a4
}

module.exports = balancedParens;
