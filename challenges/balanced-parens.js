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

    if (input === undefined || typeof(input) !== 'string' || input.length % 2 !== 0) return false;
    const open = ['(', '[', '{'];
    const close = [')', ']', '}'];
    const stack = [];
    
    for (let i = 0; i < input.length; i += 1) {
      let [openInd, closeInd] = [open.indexOf(input[i]), close.indexOf(input[i])];
      if (openInd > -1) stack.push(close[openInd]);
      else if (closeInd > -1 && input[i] === stack[stack.length - 1]) stack.pop();
      else if (closeInd > -1) return false;
    }
    return stack.length === 0;
  }	
  
module.exports = balancedParens;
