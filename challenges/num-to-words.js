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

function numToWords(num) {
  if (typeof num !== 'number') return;
  if (num === 0) return 'Zero';

  let result = '';
  let negative = false;

  if ((num + '').charAt(0) === '-') negative = true;

  let n = Math.abs(num);
  let str = n + '';

  // if (n - 10 > 0 && n - 10 < 10) return result + teens[n - 11];
  let length = str.length
  for (let i = 1; i <= length; i++) {
    if (i % 3 && str.charAt(length - i - 1) !== "" && getTeens(str.charAt(length - i -1) + str.charAt(length - i))) {
      result = getTeens(str.charAt(length - i - 1) + str.charAt(length - i)) + result;
      i++;
    }
    else {
      result = getNormal(str.charAt(length - i), i - 1) + result;
    }
  }
  return result;
}

function getTeens(str) {
  const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  let number = Number(str);
  if (number - 10 > -1 && number - 10 < 10) return teens[number - 10];
  return;
}

function getNormal(str, i) {

  let number = Number(str);
  let res = '';
  if (number !== 0) {
    const ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    const tens = ['Onety', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    const places = ['', '', 'Hundred', 'Thousand', '', '', '', '', '', '', '', '', '', '', '', '']
    if (i % 3 === 0) {
      res += ones[number - 1];
    }
    else if ((i - 1 % 3) === 0) {
      res += tens[number - 1];
    }
    else if ((i - 2 % 3 === 0)) {
      res += ones[number - 1];
    }
    res += places[i]
    return res;
  }
  else {
    return '';
  }
}

console.log(numToWords(-15));

module.exports = numToWords;
