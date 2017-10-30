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

// check if n parameter is a postive integer
// lets store the Roman Numeral in an object
// create a empty array to store the result
// modulus the number from the Roman Numeral base, if result is still the number it self
// push the Roman Numeral string to the result array
// join the result array
// return that in a string
function romanNumeral(n) {
  if (!Number.isInteger(n) || n < 0) return;

  const baseNumberNumeral = {
    'I' : 1,
    'IV' : 4,
    'V' : 5,
    'IX' : 9,
    'X' : 10,
    'XL' : 40,
    'L' : 50,
    'XC' : 90,
    'C' : 100,
    'CD' : 400,
    'D' : 500,
    'CM' : 900,
    'M' : 1000
  }

  const resultArray = [];

  let baseValues = Object.values(baseNumberNumeral);

  baseValues = baseValues.reverse();

  let i = 0;
  while (n > 0) {
    // console.log('n', n);
    // console.log(baseValues[i]);
    // console.log(n % baseValues[i]);

    if (n % baseValues[i] !== n) {
      resultArray.push(baseValues[i]);
      n = n - baseValues[i];
      i -= 1;
    }
    i += 1;

  }

  // resultArray.map((el) {
  //
  // })
  console.log(resultArray);


}

romanNumeral(1);
romanNumeral(2);
romanNumeral(3);
romanNumeral(4);
romanNumeral(4);
romanNumeral(666);
romanNumeral(900);
module.exports = romanNumeral;
