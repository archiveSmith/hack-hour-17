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
    // let test = input.replace(/\w/gi, '');
    // console.log(test);
    let arr = input.split('');
    // let count = 0;
    let parArr = []
    //count parens
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === '(' || arr[i] === ')'){
            // count++
            parArr.push(arr[i]);
        }
    }
    if (parArr.length === 0) return false;

    for (let j = 0; j < parArr.length; j++){
        if(parArr[j] === '('){
            parArr.pop()
            parArr.shift()
            console.log(parArr);
            if(parArr[j] === ')') break;
        }
    }
    
    return parArr.length === 0 ? true : false;

}

console.log(balancedParens('[(]{)}'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
