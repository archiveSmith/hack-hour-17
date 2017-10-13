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

let a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', '', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let b = ['', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
let c = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

function numToWords(num) {
  if(typeof num !== 'number') return;
  let str = num.toString();
  if(num === 0 && str.length === 1) return 'Zero';
  let words = [];
  str = str.split('').reverse().join('');
  let len = 0;
  let curNum = Number(str[len]);
  while(curNum){
    words.push(a[curNum]);
    len++;
    curNum = Number(str[len]);
  }
  return words.join('');
}

//  console.log('8 -> Eight => ', numToWords(8));
 console.log('48 -> FortyEight => ', numToWords(8));

module.exports = numToWords;
