// Write a function that takes a number as an argument and returns its english word representation as a string.
// Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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

const oneToNineteen = [
  'One', 'Two', 'Three', 'Four', 'Five', 'Six',
  'Seve', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve',
  'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
  'Seventeen', 'Eighteen', 'Nineteen'];

const tens = [
  'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty',
  'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function numToWords(num) {
  let words;
  if (num < 20) { words = oneToNineteen[num - 1]; }
  // if (num < 100)
  return words;
}

// console.log(numToWords(19));

module.exports = numToWords;
