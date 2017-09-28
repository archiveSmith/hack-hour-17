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
    // const num = n.split('');
    // const romNum = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    // const romNumValues = [1, 5, 10, 50, 100, 500, 1000];
    // let value = 0;
    // for(let i = 0; i < romNum.length; i++) {
    //     while(num[num.length-1] === romNum[i]) {
    //         value += romNumValues[i];
    //         num.pop();
    //         if(num.length === 0) { return value };

    //         while(romNum.indexOf(num[num.length-1]) < i) {
    //             value -= romNumValues[romNum.indexOf(num[num.length-1])];
    //             num.pop();
    //             if(num.length === 0) { return value };
    //         }
    //     }
    // }

    // return value;

    let value = n;
    const romNum = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    const romNumValue = [1, 5, 10, 50, 100, 500, 1000];
    let numeral = '';
    for(let i = romNum.length - 1; i >= 0; i--) {
        if ( value === 0 ) { return numeral };
        while(value - romNumValue[i] >= 0) {
            numeral += romNum[i];
            value -= romNumValue[i];
            if ( value === 0 ) { return numeral };
        }
        if(romNum[i] !== 'X' && romNum[i] !== 'C' && romNum[i] !== 'M') {
            while (value - romNumValue[i] + romNumValue[i-1] >= 0) {
                numeral += romNum[i-1].concat(romNum[i]);
                value -= romNumValue[i] - romNumValue[i-1];
                if ( value === 0 ) { return numeral };
            }
        } else {
            while (value - romNumValue[i] + romNumValue[i-2] >= 0) {
                numeral += romNum[i-2].concat(romNum[i]);
                value -= romNumValue[i] - romNumValue[i-2];
                if ( value === 0 ) { return numeral };
            } 
        }
    }

    return numeral;
}

module.exports = romanNumeral;
