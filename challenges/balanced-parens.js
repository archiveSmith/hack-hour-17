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

  // // split array for each characters
  // const arrayCharInput = input.split('');
  // console.log(arrayCharInput);
  //
  // // return false when there is only one index char because there is no more char to match
  // if (arrayCharInput.length - 1 === 0) return false;
  // // find the first character that has a '(' from 0 to array size
  // // find the last character that has a ')' from array.length - 1 to 0 array length size
  // while(arrayCharInput.length >= 0) {
  //   const firstIndexChar = arrayCharInput.findIndex((element) => element === '(');
  //   console.log('fc', firstIndexChar);
  //   for (let i = arrayCharInput.length - 1; i >= 0; i -= 1) {
  //     if (arrayCharInput[firstIndexChar] === arrayCharInput[i]) {
  //       arrayCharInput.splice(i, 1);
  //       arrayCharInput.splice(firstIndexChar, 1);
  //     } else {
  //
  //     }
  //   }
  //   break;
  // }

  // check if the input is a string
  if (typeof input !== 'string') return;

  const openParam = '(';
  const closeParam = ')';
  // check for open parameters from the beginning of the string
  // check for close parameters from the end of the string
  let first = input.indexOf(openParam);
  let end = input.lastIndexOf(closeParam);
  console.log(first, end);
  if (first === -1 || end === -1) return false;
  if (end < first) return false;
  // if both returns a index
  let newString =
  // remove the index element for the open param and remove the index element for the close param
  // if there is no index return, return false


  // if true remove the index on the first one and remove the index on the last one
}

console.log(balancedParens('('));
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

module.exports = balancedParens;
