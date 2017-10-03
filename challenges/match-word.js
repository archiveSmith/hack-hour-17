// Some languages have "if" statements that are closed by "fi" instead of curly brackets.
//Or they close a "case" with "esac", i.e. the same keyword backwards.
//for this problem we'll check that all words in a string are "closed".
//Write a function that takes a string and returns true if every word is closed by its backwards counterpart.
//Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  str=str.toUpperCase();
  let strArr = str.split('');
  let firstWord="", lastWord="";
  for (let i=0; i<strArr.length && (strArr[0].charCodeAt(0) < 65 || strArr[0].charCodeAt(0) > 90);i++) {
    strArr.shift();
console.log(strArr);
  }
  for (let i=0; i<strArr.length && (strArr[0].charCodeAt(0) >= 65 && strArr[0].charCodeAt(0) <= 90);i++) {
    firstWord+=strArr.shift();
console.log(strArr)
  }

  for (let i=strArr.length; i>=0 && (strArr[i-1].charCodeAt(0) < 65 || strArr[i-1].charCodeAt(0) > 90);i--) {
console.log(strArr);
    strArr.pop();

  }

  for (let i=strArr.length; i>=0 && (strArr[i-1].charCodeAt(0) >= 65 && strArr[i-1].charCodeAt(0) <= 90);i--) {
console.log(strArr[i-1].charCodeAt(0))
    lastWord+=strArr.pop();

  }

console.log(firstWord,'   ',lastWord)


if (lastWord===firstWord)
  return true;
  else
    return false;




}

module.exports = matchWord;

console.log(matchWord('IF()()fi[]'));
