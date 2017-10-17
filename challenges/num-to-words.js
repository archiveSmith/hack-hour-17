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
    const numbers = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    };
    const teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const doubles = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };
    // const inthrees ={
    //     100: hundred,
    //     thousand
    //     million
    //     billion
    //     trillion
    //     quadrillion
    // }

//count number of digits for placement
//for every three digits - hundred
    result = '';
    console.log(Array.from(num.toString()).map(Number));
    // let numArr = num.split('');
    // if (numArr < 3) {

    // }
    // let threes = num.splice(-3, 3);
    // console.log(threes);
    // let twos = threes.splice(-2, 2).join();
    // console.log(twos);
    //if (twos < 20)

    // result = result + numbers[threes[0]] + hundred + 
}

module.exports = numToWords;

console.log(numToWords(0)) // -> 'Zero'
console.log(numToWords(43)) // -> 'FortyThree'
console.log(numToWords(2,999)) // -> 'TwoThousandNineHundredNintyNine'
console.log(numToWords(15)) // -> 'Fifteen'
console.log(numToWords(2,483,579,411)) // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
console.log(numToWords(300,525,151,340,440)) // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
console.log(numToWords(92,120,000,000,000,000)) // -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'