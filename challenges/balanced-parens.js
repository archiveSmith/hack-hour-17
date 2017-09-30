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
//if there is closing bracket before opening, unbalanced
const bracket = {
opners: ['(','[','{'],
closers:




//     let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
//     let arr4 = [];
//     let arr5 = [];
//     let arr6 = [];
//     let open1 = false;
//     let open2 = false;
//     let open3 = false;
    
    
//     for(var i=0; i<input.length; i++) {
//         if(input[i] === '(') {
//             arr1.push(input[i])
//             open1 = true;
//         }
//         else if(input[i] === ')') {
//             arr2.push(input[i]);
//             open1 = false;
//         }
//     }

// if(arr1.length === arr2.length && open === false) { 
//   return true
// }
// else {
//   return false;

// }

}
module.exports = balancedParens;
