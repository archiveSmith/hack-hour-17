// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
// takes a string and returns true if every word is closed by its backwards counterpart.
// Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  const wordArr = getWords(str);
  const balanceStack = [];
  for (let i = 0; i < wordArr.length; i += 1) {
    const reversed = wordArr[i].split('').reverse().join('');
    if (balanceStack.length > 0) {
      const lastIn = balanceStack[balanceStack.length - 1];
      if (lastIn === reversed) {
        balanceStack.pop();    
      } else {
        balanceStack.push(wordArr[i]);
      }
    } else {
      balanceStack.push(wordArr[i]);
    } 
  }
  return balanceStack.length === 0;
}

function getWords(str) {
  const newStr = str.toLowerCase().replace(/[^a-z]/g, '%');
  return newStr.split('%').filter((word) => word.length);
}

module.exports = matchWord;
