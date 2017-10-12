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

    if (n === 0) return "nulla"; // return latin 0

    const numList = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    const romanList = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let num = n;
    let newArr = [];

    for (let x = numList.length-1; x >= 0; x--) {
        while (num >= numList[x]) {
            num = num - numList[x];
            newArr.push(romanList[x]);
        }
    }
    return newArr.join("");
}

module.exports = romanNumeral;

// Tests
// console.log(romanNumeral(1847));
// console.log(romanNumeral(3506));
// console.log(romanNumeral(0));
