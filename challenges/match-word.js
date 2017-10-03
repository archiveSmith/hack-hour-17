// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

const isMatch = (str1, str2) => str1 === str2;

const matchWord = (str) => {
  if(!str) return true;
  let splitStr = str.split(/[^A-Za-z]/).filter(line => line !== '');
  let stack = [];
  for(i = 0; i < splitStr.length; i++){
    if(!stack.length || !isMatch(splitStr[i].toLowerCase(), stack[stack.length-1])) stack.push(splitStr[i].toLowerCase().split('').reverse().join(''));
    else stack.pop();
  }
  
  return !stack.length;
}

// ========== //
// TEST CASES //
// ========== //
// console.log('true ==> ', matchWord('__END_DNE-----'));
// console.log('false ==> ', matchWord('__ENDDNE__'));
// console.log('true ==> ', matchWord('IF()()fi[]'));
// console.log('false ==> ', matchWord('for__if__rof__fi'));
// console.log('true ==> ', matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log('true ==> ', matchWord(''));


module.exports = matchWord;