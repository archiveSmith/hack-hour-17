// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function handleTeens(num) {
  switch (num) {
    case 10: return 'Ten';
    case 11: return 'Eleven';
    case 12: return 'Twelve';
    case 13: return 'Thirteen';
    case 14: return 'Fourteen';
    case 15: return 'Fifteen';
    case 16: return 'Sixteen';
    case 17: return 'Seventeen';
    case 18: return 'Eighteen';
    case 19: return 'Nineteen'
  }
}

let digits = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine'
};

let postfix = { // key: length, val: postfix
  ones: '', // just the number
  tens: 'ty',
  hundrends: 'Hundred',
  thousands: 'Thousand',
  bigs: ['Million, Billion'],
  5: '"hundred" Thousand',
  6: 'million'
}


function numToWords(num) {
  let result = '';
  let i = 0;
  let numDigits = num.toString().length;
  
  if (num === 0) return 'Zero';

  if (num.toString()[numDigits - 2] === '1') { //teens
    var numStr = num.toString();
    numStr = numStr.slice(-2);
    result += handleTeens(parseInt(numStr));
    i = 2;
  }

  for (i; i < num.toString().length; i += 1) {
    let lastDigit = num % 10;
    let word = digits[lastDigit] + postfix[i];

    result = word + result;
    num = Math.floor(num / 10);
  }
  return result;
}


















console.log(numToWords(20));

module.exports = numToWords;
