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
  let str;

  function singleDigit(num) {
  switch (num) {
    case 0: str = "Zero";
        break;
    case 1: str = "One";
        break;
    case 2: str = "Two";
        break;
    case 3: str = "Three";
        break;
    case 4: str = "Four";
        break;
    case 5: str = "Five";
        break;
    case 6: str = "Six";
      break;
    case 7: str = "Seven";
      break;
  case 8: str = "Eight";
      break;
  case 9: str = "Nine";
  }
  return str;
  }

  function weirdNums(num) {
    switch (num) {
      case 10: str = "Ten";
          break;
      case 11: str = "Eleven";
          break;
      case 12: str = "Twelve";
          break;
      case 13: str = "Thirteen";
          break;
      case 14: str = "Fourteen";
          break;
      case 15: str = "Fifteen";
          break;
      case 16: str = "Sixteen";
        break;
      case 17: str = "Seventeen";
        break;
    case 18: str = "Eightteen";
        break;
    case 19: str = "Nineteen";
    }
    return str;
  }

  function Tens(num) {
    let numStr = num.toString().split("");
    numStr[0] = parseInt(numStr[0]);
    numStr[1] = parseInt(numStr[1]);

    switch (numStr[0]) {
      case 2: str = "Twenty";
          break;
      case 3: str = "Thirty";
          break;
      case 4: str = "Forty";
          break;
      case 5: str = "Fifty";
          break;
      case 6: str = "Sixty";
          break;
      case 7: str = "Seventy";
          break;
      case 8: str = "Eighty";
        break;
      case 9: str = "Ninety";
      }
      let result = str;
      let secondDigit = singleDigit(numStr[1]);
      return result.concat(secondDigit);
  }

  function Hundreds(num) {
    let numStr = num.toString().split("");
    let hundred = parseInt(numStr[0]);

    let leftover = parseInt(numStr.splice(1,2).join(""));

    let hundredStr = singleDigit(hundred);

    let otherDigits;
    if (leftover < 20) {
      otherDigits = weirdNums(leftover);
    } else {
      otherDigits = Tens(leftover);
    }
    return hundredStr.concat("Hundred",otherDigits);
  }

  function Thousands(num) {
    let numStr = num.toString().split("");
    let thousand = parseInt(numStr[0]);

    let leftover = parseInt(numStr.splice(1,3).join(""));
    
    let thousandStr = singleDigit(thousand).concat("thousand");
    let otherDigits = Hundreds(leftover);
    return thousandStr.concat(otherDigits);
  }

  if (num < 10) {
    return singleDigit(num);
  } else if (num > 9 && num < 20) {
    return weirdNums(num);
  } else if (num > 19 && num < 100) {
    return Tens(num);
  } else if (num > 99 && num < 1000) {
    return Hundreds(num);
  } else if (num > 999 && num < 10000) {
    return Thousands(num);
  }
}


module.exports = numToWords;

// // Test 
// let num = 1619;
// console.log(numToWords(num));
