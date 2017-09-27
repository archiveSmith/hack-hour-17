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
 * balancedParens('[()]{}') // true ???
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
let arr = input.split('')
  // remove all characters that are not parens, brackets, or braces
  let filteredArr = arr.filter((letter) => {
    return letter === '(' ||
    letter === ')' ||
    letter === '{' ||
    letter === '}' ||
    letter === '[' ||
    letter === ']'
  })
  if (filteredArr.length % 2 !== 0) { return false }
  let temp;
  // if first index is open tag, continue / else return false
  if (filteredArr[0] === '(' || filteredArr[0] === '[' || filteredArr[0] === '{') {
    temp = filteredArr[0]
  } else { return false }
  // check if next possible index is closing tag
  for(let i = 1; i < filteredArr.length; i += 2) {
    if (
      temp === '(' && filteredArr[i] === ')' ||
      temp === '[' && filteredArr[i] === ']' ||
      temp === '{' && filteredArr[i] === '}'
    ) {
      filteredArr.splice(i, 1)
      filteredArr.shift()
      console.log(filteredArr)
      break
    }
  }
  // once the string is empty return true
  if (filteredArr.length === 0) {return true}
  return (balancedParens(filteredArr.join('')))

}


module.exports = balancedParens;
