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
 */

function balancedParens(input){
    if (typeof input !== 'string') return false;

    let stringArr = input.split('');
    const openers = ['(','[','{'];
    const closers = [')',']','}'];

    function isOpener(char) {
        if (openers.indexOf(char) !== -1) {
            return true;
        }
        return false;
    }

    function isCloser(char) {
        if (closers.indexOf(char) !== -1) {
            return true;
        }
        return false;
    }

    function isMatch(char1, char2) {
        if (openers.indexOf(char2) === closers.indexOf(char1)) {
            return true;
        }
        return false;
    }

    let openStack = [];

    for (let x = 0; x < stringArr.length; x += 1) {
        let currentChar = stringArr[x];
        let bracketToClose = openStack[openStack.length - 1];

        if (isOpener(currentChar) === true) {
            openStack.push(currentChar);
        } else if (isMatch(currentChar, bracketToClose) === true) {
            openStack.pop();
        } else if (isCloser(currentChar) && openStack.length === 0) {
            return false;
        }
    }
    if (openStack.length === 0) {
        return true;
    }
    return false;
}

// module.exports = balancedParens;

// Tests
console.log(balancedParens('[(]{)}'));


// Original Try
// function balancedParens(input){
//     let chars = input.split("");
//     let result = false;

//     // if length 0 or 1, return false
//     if (chars.length === 0 || chars.length === 1) {
//         return false;
//     }
//     // if length 2
//     else if (chars.length === 2) {
//         return checkTwo(chars);
//     }

//     // for other lengths
//     else {
//         for (let x = 0; x < chars.length; x++) {
//             let tempTwo = chars.slice(x,x+2);
//             if (chars[x] === "(") {
//                 if (checkTwo(tempTwo) === true) {
//                     result = true;
//                 }
//                 else if (checkTwo(tempTwo) === false) {
//                     return false;
//                 }
//                 else if (chars[x] === "(") {
//                     if (chars[chars.length-1-x] === ")") {
//                         result = true;
//                     }
//                 }
//                 else if (chars[x] === "[") {
//                     if (chars[chars.length-1-x] === "]") {
//                         result = true;
//                     }
//                 }
//                 else if (chars[x] === "{") {
//                     if (chars[chars.length-1-x] === "}") {
//                         result = true;
//                     }
//                 }
//                 else {
//                     return false;
//                 }
//             }
//             return result;
//             // else if (chars[x] === "[") {
//             //     // if runTwo
//             //     // check palindrome
//             // }
//             // else if (chars[x] === "{") {
//             //     // if runTwo
//             //     // check palindrome
//             // }
//             // return true;
//         }
//     }
// }

// function checkTwo(arr) {
//     if (arr[0] === "(") {
//         if (arr[1] === ")") {
//             return true;
//         }
//     }
//     else if (arr[0] === "[") {
//         if (arr[1] === "]") {
//             return true;
//         }
//     }
//     else if (arr[0] === "{") {
//         if (arr[1] === "}") {
//             return true;
//         }
//     }
//     return false;
// }