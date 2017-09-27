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
 *  XLIXVI
 */

function romanNumeral(n) {
    const num = n.split('');
    const romNum = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const romNumValues = [1, 5, 10, 50, 100, 500, 1000];
    let value = 0;
    for(let i = 0; i < romNum.length; i++) {
        while(num[num.length-1] === romNum[i]) {
            value += romNumValues[i];
            num.pop();
            if(num.length === 0) { return value };

            while(romNum.indexOf(num[num.length-1]) < i) {
                value -= romNumValues[romNum.indexOf(num[num.length-1])];
                num.pop();
                if(num.length === 0) { return value };
            }
        }
    }

    return value;
}

console.log(romanNumeral('MDCCC'));

module.exports = romanNumeral;
