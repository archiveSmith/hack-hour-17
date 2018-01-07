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
  let num = parseInt(n);
  if (num !== n || num < 1) return;
  if (num === 1) return 'I';
  let result = '';
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let i = 0; i < numbers.length; i++) {
      if (num >= numbers[i]) {
          result += romans[i];
          num = num - numbers[i];
          break;
      }
  }
  if (num > 0) result = result + romanNumeral(num);
  return result;
}


// OLD - still works

function romanNumeral(n) {
  let result = '';
  
  if (n > 4999) return;
  
  while (n >= 1000) {
      result += 'M';
      n -= 1000;
  }
  if (n >= 900) {
      result += 'CM';
      n -= 900;
  }
  if (n >= 500) {
      result += 'D';
      n -= 500;
  }
  if (n >= 400) {
      result += 'CD';
      n -= 400;
  }
  while (n >= 100) {
    result += 'C';
    n -= 100;
  }
  if (n >= 90) {
    result += 'XC';
    n -= 90;
  }
  if (n >= 50) {
    result += 'L';
    n -= 50;
  }
  if (n >= 40) {
    result += 'XL';
    n -= 40;
  }
  while (n >= 10) {
    result += 'X';
    n -= 10;
  }
  if (n >= 9) {
    result += 'IX';
    n -= 9;
  }
  if (n >= 5) {
    result += 'V';
    n -= 5;
  }
  if (n >= 4) {
    result += 'IV';
    n -= 4;
  }
  while (n >= 1) {
    result += 'I';
    n -= 1;
  }

return result;
}

module.exports = romanNumeral;
