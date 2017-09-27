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
  let parenFlag=0, curlyFlag=0, brackFlag=0;
  let parenBegin=0, curlyBegin=0, brackBegin=0;
  let inputArr = input.split('');
  console.log(inputArr);

  for (let i = 0; i < inputArr.length; i++) {

    switch (inputArr[i]) {
      case '(':
        parenFlag++;
        parenBegin = i;
        break;
       case ')':
        parenFlag--;
        if (curlyFlag!==0 || brackFlag!==0)
          return false;
         if (parenFlag===0)
                balancedParens(inputArr.slice(parenBegin+1,i).join(""));
            else return false;
         break;
      case '{':
        curlyFlag++;
        curlyBegin = i;
        break;
         case '}':
         curlyFlag--;
         if (brackFlag!==0 || parenFlag!==0)
           return false;
         if (curlyFlag===0)
                balancedParens(inputArr.slice(curlyBegin+1,i).join(""));
                  else return false;
         break;
        case '[':
        brackFlag++;
        brackBegin = i;
        break;
       case ']':
          brackFlag--;
          if (curlyFlag!==0 || parenFlag!==0)
            return false;
          if (brackFlag===0)
                 balancedParens(inputArr.slice(brackBegin+1,i).join(""));
                   else return false;
        break;
    }
  }

  if (parenFlag===0 && curlyFlag===0 && brackFlag===0)
    return true;
    else return false;

}

module.exports = balancedParens;
