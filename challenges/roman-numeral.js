/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function getCrappyRomanNumeral(n) {
    let num = n;
    let romans = [
        [1,'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ];

    let result = '';
    let searchForLargest;
    searchForLargest = true;
    for (let i = romans.length - 1; i >= 0 && searchForLargest; i--) {
        if (num / romans[i][0] >= 1) {
            result = romans[i][1] + result;
            num = num - romans[i][0];
            searchForLargest = false;
        }
    }
    if (num > 0) {
        return result + getCrappyRomanNumeral(num);
    }
    return result;
}

function fixRoman(string) {
    // Not working way to fix wrong repeats


    // let newString = string;
    // let replacements = {
    //     'IIII'  : 'IV',
    //     'IIIII' : 'V',
    //     'VV'    : 'X',
    //     'XXXX'  : 'XL',
    //     'XXXXX' : 'L',
    //     'LL'    : 'C',
    //     'CCCC'  : 'CD',
    //     'DD'    : 'M'
    // }
    // for (key in replacements) {
    //     newString = newString.replace(key, replacements[key]);
    // }
}

function romanNumeral(n) {
    let num = parseInt(n);
    if (num !== n || num < 1) return;
    if (num === 1) return 'I';
    let crappyRoman = getCrappyRomanNumeral(num);

    // while (crappyRoman !== fixRoman(crappyRoman)) {
    //     crappyRoman = fixRoman(crappyRoman);
    // }
    return crappyRoman.replace('IIII', 'IV').replace('DCCCC','CM');
}

module.exports = romanNumeral;
