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

function balancedParens(input) {
  const complementsIndex = {
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
    '(': ')',
    ')': '('
  };

  const justParens = input.match(/[\[\]\{\}\(\)]/g);
  const len = justParens.length;

  // quick checks
  if (len % 2 !== 0) return false;
  if (justParens[0] === ']' || justParens[0] === '}' || justParens[0] === ')') return false;
  if (justParens[len - 1] === '[' || justParens[len - 1] === '{' || justParens[len - 1] === '(') return false;

  const temp = [];

  for (let i = 0; i < len; i += 1) {
    if (i === 0) temp.push (justParens[i]);
    else {
      if (justParens[i - 1] === complementsIndex[justParens[i]]) temp.shift();
    }
  }

  return temp.length ? false : true;
}

module.exports = balancedParens;
