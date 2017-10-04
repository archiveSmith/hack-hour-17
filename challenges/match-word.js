// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
if(typeof str !== 'string') return;
if(str ==='') return true;

const words = str.split(/[^a-zA-Z]/).filter(elem => elem !=='').map(word => word.toLowerCase())

const wordStack = [];
//for each word, compare reverse with top of wordstack
//if equal -> pop the wordstack
//if not - > push the word to the stack.

words.forEach(word => {
    const reversedWord = word.split('').reverse().join('');
    const topOfStack = wordStack[wordStack.length-1]
    if(reversedWord === topofStack) wordStack.pop();
    else wordStack.push(word)
})

return wordStack.length === 0;
}

module.exports = matchWord;
