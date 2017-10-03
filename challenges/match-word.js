// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
    //edge cases
    if (str.length <= 1) return true;
    //use regex to clean up non alphanumeric char
    //replace non alphanumeric
    let temp = str.replace(/[^a-z0-9]/gi, ' ').replace(/\s+/g, ' ').trim().split(' ');
    // console.log(temp);
    //grab each word
    for (let i = 0; i < temp.length; i++) {
        //reverse the word
        let revTemp = temp[i].split('').reverse().join('');
        //use indexof to find the word 
        if (temp.indexOf(revTemp) === -1) {
            return false;
        } else {
            //shift 1st value off of array
            temp.shift();
            //splice the matching value
            temp.splice(temp.indexOf(revTemp), 1);
        }
    }
    if (temp.length <= 1) return true;
}

console.log(matchWord('for__if__rof__fi'));

module.exports = matchWord;