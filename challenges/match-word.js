// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    if (str === '') return true;
    let newStr = str.match(/[a-z]+[^a-z]*/gi);
    let arr = [];
    
    for (let word of newStr) {
      arr.push(word.replace(/[^a-z]/gi, '').toLowerCase());
    }
    
    if (arr.length % 2 === 1) return false;
    
    let length = arr.length;
    
    arr.filter((element, index, array) => {
      return array.indexOf(element.split('').reverse().join('')) === index;
    });
    
    if (arr.length !== length) return false;
    
    for (let i = 0; i < arr.length - 1; i++) {
      let currIndex;
      let nextIndex;
      currIndex = arr.lastIndexOf(arr[i].split('').reverse().join(''));
      if ((arr.indexOf(arr[i + 1]) < currIndex) && (arr.lastIndexOf(arr[i + 1].split('').reverse().join('')) > currIndex)) {
        console.log(arr[i]);
        return false;
      }
    }
    return true;
}

module.exports = matchWord;
