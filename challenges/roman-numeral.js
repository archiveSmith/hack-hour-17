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
  let returnStr = '';
  let number = n;
  const highestRomanNumerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  const romamNumeralsArr = Object.entries(highestRomanNumerals);
  let lastNumeralSize = 0;
  while (number > 0) {
    for (let i = lastNumeralSize; i < romamNumeralsArr.length; i += 1) {
      if (number >= romamNumeralsArr[i][1]) {
        lastNumeralSize = i;
        number -= romamNumeralsArr[i][1];
        returnStr += romamNumeralsArr[i][0];
        break;
      }
    }  
  }
  return returnStr;  
}

module.exports = romanNumeral;
