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
  let inputArr = input.split('');
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const letters = /^[A-Za-z]+$/;
  const newArr = [];
  const trashArr = [];
  for (let x = 0; x < inputArr.length; x += 1) {
    if (inputArr[x] === '(' || inputArr[x] === '{' || inputArr[x] === '[') {
      newArr.push(inputArr[x]);
    } else if (inputArr[x].match(/[a-z]/i) !== null) {
      console.log(inputArr[x]); //
      trashArr.push(inputArr[x]);
    } else {
      const last = newArr.pop();
      if (inputArr[x] !== brackets[last]) {
        return false;
      }
    }
  }
  if (newArr.length !== 0) {
    return false;
  }
  return true;
}


module.exports = balancedParens;

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false