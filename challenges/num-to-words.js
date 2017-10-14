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

const numToWords = num => {
    const { bigs } = numWords;
    let numToShave = num;
    let output = '';
    let bigPlace = 0;
  
    while (numToShave > 0) {
      output = bigs[bigPlace] + output;
      output = smallNumToWords(numToShave % 1000) + output;
      numToShave = Math.floor(numToShave / 1000);
      bigPlace += 1;
    }
  
    return output;
  };
  
  const smallNumToWords = num => {
    const { ones, tens } = numWords;
    let numToShave = num;
    let output = '';
    let digitPlace = 1;
  
    while (numToShave > 0) {
      if (digitPlace === 3) output = 'Hundred' + output;
      let currentDigit = numToShave % 10;
      numToShave = Math.floor(numToShave / 10);
  
      if (numToShave % 10 !== 1) {
        let currentDigitToWord = digitPlace === 2 ? tens[currentDigit] : ones[currentDigit];
        output = currentDigitToWord + output;
        digitPlace += 1;
      } else {
        output = numWords.teens[currentDigit] + output;
        numToShave = Math.floor(numToShave / 10);
        digitPlace += 2;
      }
    }
  
    return output;
  };
