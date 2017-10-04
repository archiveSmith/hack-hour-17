// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  //find a regex to remove specials characters before and after the string
  //find a regex to check if there is space or special character between Words
  //set both words into the same case-insensitive
  //the only thing that matters is the words that are at the first and last place
  
  if(str === ''){
    return str;
  }
  
  let test = str.replace(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\_|\s/g, ' ');
  test = test.replace(/^\s+|\s+$/g, "");
  
  //str.match([+a-z*])
  
  let hold =[];
  let hold2 = [];
  let check =[];
  
  // for(let i = 0; i < test.length; i++){
  //   if(test[i] === ' '){
  //     check.push(test[i])
  //   }else{
  //     return false;
  //   }
  // }
  

  for(let i = 0; i < test.length; i++){
    if(test[i] === ' '){
      break;
    }else{
      hold.push(test[i])
    }
  }
  
  let reversed = hold.reverse();
  console.log(reversed)
  
  for(let i = test.length - 1; i >= 0; i--){
    if(test[i] === ' '){
      break;
    }else{
      hold2.push(test[i])
    }
  }
  
  let reversed2 = hold2.reverse()
  console.log(reversed2)
  hold = reversed.join('').toLowerCase();
  hold2 = reversed2.join('').toLowerCase();
  
  console.log(hold);
  if(hold2 == hold){
    return true
  }else{
    return false
  }

}

console.log(matchWord('__ENDDNE__'))
module.exports = matchWord;
