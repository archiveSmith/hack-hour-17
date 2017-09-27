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

function romanNumeral(n) {
    //set up reference for values
    const ref = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // Letter repeats only three times
    // If one or more letters are placed after another letter of greater value, add that amount.
    // If a letter is placed before another letter of greater value, subtract that amount.
    let output = '';
    let refKeys = Object.keys(ref);
    let refValues = Object.values(ref);

    if (n === 0) return output;

    //use ref values to subtract the highest number from n
    //loop through the reference values
    //push the reference key to an output string
    //try to use recursion to reiterate until 0
    
    let temp = (Math.floor(n/5) * 5);
    n = n - temp;
    
    temp.indexOf(refValues);
    

    // for (let i = 0; i < refValues.length; i++) {
    //     while (n > 0) {
    //         if (n >= refValues[i]) {
    //             console.log(n);
    //             output.concat(refKeys[i]);
    //             //subract the highest value from n and try to use recursion
    //             n = n - refValues[i];
    //         }
    //     }
    // }
}
// console.log(romanNumeral(2));
console.log(Math.floor(57/5)*5);

module.exports = romanNumeral;
