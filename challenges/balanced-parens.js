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
function isParenthesis(char) {
  var str = '{}[]()';
  if (str.indexOf(char) > -1) {
    return true;
  } else {
    return false;
  }
}

function isOpenParenthesis(parenthesisChar) {
  for (var j = 0; j < tokens.length; j++) {
    if (tokens[j][0] === parenthesisChar) {
      return true;
    }
  }
  return false;
}

function matches(topOfStack, closedParenthesis) {
  for (var k = 0; k < tokens.length; k++) {
    if (tokens[k][0] === topOfStack && 
        tokens[k][1] === closedParenthesis) {
      return true;
    }
  }
  return false;
}

function balancedParens(input){
  let str = '{}[]()';
  var expression = input.split('');
  var stack = [];
  for (var i = 0; i < expression.length; i++) {
    if(str.indexOf(expression[i]) > -1){
      if(isOpenParenthesis(expression[i])){
        stack.push(expression[i]);
      }else{
        if(stack.length === 0){
          return false
        }else{
          return true
        }
        var top = stack.pop();
        if(!matches(top, expression[i])){
          return false;
        }else{
          return true
        }
        }
      }
    }
  }

module.exports = balancedParens;
