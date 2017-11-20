/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function getAllPermutations(str) {
  let arr = str.split('');
  let perms = [];
  for (let i = 0; i < arr.length; i += 1) {
    let s = str[i];
    for (let j = 0; j < arr.length; j += 1) {
      if (i != j) s += str[j];
    }
    perms.push(s);
  }
  return perms;
}

function checkPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  }
  return true;
}

function permPalin(str) {
   if (!str || typeof str !== 'string') return false;
   let arr = getAllPermutations(str);

   for (let i = 0; i < arr.length; i += 1) {
     if (checkPalindrome(arr[i])) return true;
   }

   return false;
}

// Didn't know how to get all permutations all string so tried to modify a SO solution but something random isn't working.

// function checkPalindrome(str) {
//   for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
//   }
//   return true;
// }
//
// function permPalin(str) {
//    if (!str || typeof str !== 'string') return false;
//
//    function permute(arr, memo) {
//      var cur, memo = memo || [];
//
//      for (var i = 0; i < arr.length; i++) {
//        cur = arr.splice(i, 1);
//        if (arr.length === 0) {
//          if (checkPalindrome(memo.concat(cur).join(''))) return true;
//        }
//        permute(arr.slice(), memo.concat(cur));
//        arr.splice(i, 0, cur[0]);
//      }
//      return false;
//    }
//
//    return permute(str.split(''));
// }


module.exports = permPalin;
