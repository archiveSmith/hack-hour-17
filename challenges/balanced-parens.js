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

function balancedParens (input) {
  const string = input.split('');
  const parens = [];
  const parenMatch = {
    '[': ']',
    '(': ')',
    '{': '}'
  };
  const left = Object.keys(parenMatch);
  const right = Object.values(parenMatch);

  for (let i = 0; i < string.length; i++) {
    if (left.some((paren) => (paren === string[i]))) {
      parens.push(string[i]);
    } else if (right.some((paren) => (paren === string[i]))) { if (parenMatch[parens.pop()] !== string[i]) { return false; } }
  }

  return (parens.length === 0);
}

module.exports = balancedParens;
