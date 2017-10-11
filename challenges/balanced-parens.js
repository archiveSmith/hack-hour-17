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

  const brackets = {
    openers: ['(', '[', '{'],
    closers: [')', ']', '}'],
  
    isOpener: function (char) {
      return this.openers.includes(char);
    },
  
    isCloser: function (char) {
      return this.closers.includes(char);
    },
  
    isCounterParts: function (a, b) {
      if (this.openers.includes(a)) {
        return this.openers.indexOf(a) === this.closers.indexOf(b);
      } else if (this.closers.includes(a)) {
        return this.closers.indexOf(a) === this.openers.indexOf(b);
      } else {
        return false;
      }
    },
  }
  
  const balancedParens = (input) => {
    if (typeof input !== 'string') return;
    const bracketStack = [];
  
    for (let i = 0; i < input.length; i += 1) {
      let currentChar = input.charAt(i);
      let bracketToClose = bracketStack[bracketStack.length - 1] || null;
  
      if (brackets.isOpener(currentChar)) {
        bracketStack.push(currentChar);
      } else if (brackets.isCounterParts(bracketToClose, currentChar)) {
        bracketStack.pop();
      } else if (brackets.isCloser(currentChar) && bracketStack.length === 0) {
        return false;
      }
    }
  
    return bracketStack.length === 0;
  }


module.exports = balancedParens;
