// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// Use regex to filter everthing except the alphabets
// replace symbols with space
// separate each word with split using space
// go through the first index of element and check to see if there is a reverse match
// if there is remove the reverse index element using splice and and unshift the element
// if there are still element within the array, return false
// if empty array return true;
function matchWord(str) {
  var filterString = str.replace(/[^a-zA-Z0-9]+/g, ' ').trim().toUpperCase();
  stringArray = filterString.split(' ');

  copyStringArray = Array.from(stringArray);

  // if the elements is odd, we know one of them is not properly close, return false
  if ((copyStringArray.length % 2) !== 0) {
    return false;
  }

  for (let i = 0; i < stringArray.length; i++) {
    // console.log(stringArray.length);
    for (let j = 0; j < copyStringArray.length; j++) {
      let reverse = copyStringArray[j].split('').reverse().join('');
      // console.log(stringArray[i], reverse);
      if (stringArray[i] === reverse) {
        copyStringArray.splice(j, 1);
        copyStringArray.shift();
        // console.log(stringArray.length);
      }
    }
  }
  // console.log(copyStringArray, copyStringArray.length);
  if (copyStringArray.length === 0) {
    return true;
  } else {
    return false;
  }


}


console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ]
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
console.log(matchWord(''));  //-> true

module.exports = matchWord;
