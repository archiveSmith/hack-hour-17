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

function numToWords(n) {
    let string = num.toString();

    if (parseInt(string) === 0) {
        return 'Zero';
    }
    let ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    let scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quatttuor-decillion', 'Quindecillion', 'Sexdecillion', 'Septen-decillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Centillion'];

    let start = string.length;
    let chunks = [];
    while (start > 0) {
        let end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    if (chunks.length > scales.length) {
        return '';
    }

    let words = [];
    for (let i = 0; i < chunks.length; i += 1) {

        let chunk = parseInt(chunks[i]);

        if (chunk) {
            let ints = chunks[i].split('').reverse().map(parseFloat);

            if (ints[1] === 1) {
                ints[0] += 10;
            }
            if (word = scales[i]) {
                words.push(word);
            }
            if (word = ones[ints[0]]) {
                words.push(word);
            }
            if (word = tens[ints[1]]) {
                words.push(word);
            }
            if (word = ones[ints[2]]) {
                words.push(word + 'Hundred');
            }
        }
    }
    return words.reverse().join('');
}

module.exports = numToWords;
