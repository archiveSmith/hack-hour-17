// Some languages have "if" statements that are closed by "fi" instead of curly
// brackets. Or they close a "case" with "esac", i.e. the same keyword backwards.
// for this problem we'll check that all words in a string are "closed".
// Write a function that takes a string and returns true if every word is
// closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // change string to lower case
  const input = str.toLowerCase().replace(/[^a-z]/gi, ' ');
  const arr = input.split(' ');
  const filteredArr = arr.filter(index => index !== '');

  const first = filteredArr[0];
  const last = filteredArr[filteredArr.length - 1].split('').reverse().join('');

  if (first === last) {
    return true;
  }
  return false;
}

module.exports = matchWord;
