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
    let array = str.toLowerCase().split("");
    let newArr = [];

    for (let x = 0; x < array.length; x++) {
        if (array[x].match(/[a-z]/gi)) {
            newArr.push(array[x]);
        }
        else {
            newArr.push(" ");
        }
    }

    // Remove trailing white spaces
    function removeSpace(arr) {
        while (arr[0] === " ") {
            arr.shift();
        }
        return arr;
    }
    removeSpace(newArr);
    newArr.reverse();
    removeSpace(newArr);
    newArr.reverse();

    // Remove extra spaces between words and split where there is 1 space only
    let noSpaces = [];
    for (let y = 0; y < newArr.length; y++) {
        if (newArr[y] !== " ") {
            noSpaces.push(newArr[y]);
        } else if (newArr[y] === " " && newArr[y+1] !== " ") {
            noSpaces.push(newArr[y]);
        }
    }
    noSpaces = noSpaces.join("");
    noSpaces = noSpaces.split(" ");

    function checkMatch(ind) {
        let result = true;
        


        return result

    }

    for (let i = 0; i < noSpaces.length; i++) {
        checkMatch(i);
    }

    let reversedWord = noSpaces[i].split("").reverse().join("");
    for (let z = i+1; z < noSpaces.length; z++) {
        // let word = noSpaces[i];
        if (noSpaces[z].match(reversedWord) === true && result === true) {
            result = true;
        }
    }

    

    if (result === undefined) {
        return false;
    }

    return result;

}



// module.exports = matchWord; 
// Test
// console.log(matchWord('__END_DNE-----'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
