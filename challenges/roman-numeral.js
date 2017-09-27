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
  let num = n;
  let roman = '';

  if (num >= 1000) {
    let tempCount = 0;
    for (let i = 1000; i <= num; i += 1000) {
      tempCount += 1000;
      roman += 'M';
    }
    num -= tempCount;
  }
  if (num >= 900) {
    num -= 900;
    roman += 'CM';
  }
  if (num >= 500) {
    num -= 500;
    roman += 'D';
  }
  if (num === 400) {
    num -= 400;
    roman += 'CD';
  }
  if (num >= 100) {
    let tempCount = 0;
    for (let i = 100; i <= num; i += 100) {
      tempCount += 100;
      roman += 'C';
    }
    num -= tempCount;
  }
  if (num >= 50) {
    num -= 50;
    roman += 'L';
  }
  if (num === 40) {
    num -= 40;
    roman += 'XL';
  }
  if (num >= 10) {
    let tempCount = 0;
    for (let i = 10; i <= num; i += 10) {
      tempCount += 10;
      roman += 'X';
    }
    num-= tempCount;
  }
  if (num >= 5) {
    num -= 5;
    roman += 'V';
  }
  if (num === 4) {
    num -= 4;
    roman += 'IV';
  }
    if (num > 0) {
      let tempCount = 0;
      for (let i = 0; i < num; i += 1) {
        tempCount += 1;
        roman += 'I';
      }
    num -= tempCount;
  }
  console.log(num)
  return roman;
}

module.exports = romanNumeral;
