// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.length === 0) {
    return true;
  }
  if (str.length <= 3) {
    return false;
  }

  //grab words from str
  let matches = str.match(/[a-zA-Z]+/g);
  console.log(matches);
 

  // for (let i = 0; i < letters.length; i += 1) {
  //   let checkedWord = '';
  //   for (var j = 0; j < letters[i].length; j++) {
  //     if (/[a-zA-Z]/.test(letters[i][j])) {
  //     checkedWord += letters[i][j];
  //     }
  //     firstWord = checkedWord;
  //   }
  // } 



//capture word and store it to be compared

//loop through string from back to find word

//check if words mirror

}

module.exports = matchWord;

console.log(matchWord('for $$if rof fi'));