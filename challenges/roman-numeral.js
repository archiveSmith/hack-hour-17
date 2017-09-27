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


 /* **********************
  * **Recursive Solution**
  * ********************** */

function romanNumeral(n) {
  let result = '';
  //declare the roman numeral basic conversions into an object from greatest to lowest\
  const romanNumTable = [
    ['M',  1000],
    ['CM', 900],
    ['D',  500],
    ['CD', 400],
    ['C',  100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  
  // Basecase: when number reaches 0
  if (n === 0) return '';
  // loop through Roman Numeral Table
  for (let i = 0; i < romanNumTable.length; i++) {
    // if n is greater/equal to RNTable -> return the converted RN + Recursively call function again (decrement from the number converted)
    if (n >= romanNumTable[i][1]) return romanNumTable[i][0] + romanNumeral(n - romanNumTable[i][1])
  }
}


console.log(romanNumeral(91))

module.exports = romanNumeral;
