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
let answer = ''
const integer = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
const roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
for(let i=0; i<integer.length; i++) {
    while(n%integer[i] < n) {
        answer += roman[i];
        n-= integer[i]
    }
}
return answer;
}

module.exports = romanNumeral;
