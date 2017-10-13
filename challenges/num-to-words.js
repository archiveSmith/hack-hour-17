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

// array of unique number words
const powerThousand = { 1: 'Thousand', 2: 'Million', 3: 'Billion', 4: 'Trillion', 5: 'Quadrillion' };
const ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['Zero', 'Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];

// helper function that returns 3 digit numbers
function threeDigit(num) {
  let numWord = '';

  //check hundreds
  if (Math.floor(num / 100) > 0) {
    // console.log(num, Math.floor(num / 100), ones[Math.floor(num / 100)])
    numWord += ones[Math.floor(num / 100)] + 'Hundred'
    num -= Math.floor(num / 100) * 100;
  }

  //check tens
  if (Math.floor(num / 10) > 1) {
    numWord += tens[Math.floor(num / 10)]
    num -= Math.floor(num / 10) * 10;
  }

  //check 0-19
  if (num) {
    numWord += ones[num]
  }

  return numWord;
}


// main function 
function numToWords(num) {
  if(!num) return;
  if(num === 0) return 0;

  let word = ''

  // figure out powers of 100
  for (let i = 5; i >= 1; i -= 1) {
    if (num - Math.pow(1000, i) > 0) {
      word += threeDigit((Math.floor(num/Math.pow(1000, i)))) + powerThousand[i];
      num -= Math.floor(num/Math.pow(1000, i))*Math.pow(1000, i);
    }
  }

  if (num > 0) {
    word += threeDigit(num);
  }

  return word;
}

// console.log([
//   // numToWords(0), //-> 'Zero'
//   // numToWords(43), //-> 'FortyThree'
//   // numToWords(99), //-> 'NinetyNine'
//   // numToWords(155), //-> 'Fifteen'
//   // numToWords(2999), //-> 'TwoThousandNineHundredNintyNine'
//   // numToWords(2483579411), //-> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
//   // numToWords(300525151340440), //-> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
//   // numToWords(92120000000000000), //-> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
// ])

module.exports = numToWords;
