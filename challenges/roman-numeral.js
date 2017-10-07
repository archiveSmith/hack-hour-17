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
  // input a an integer
  // output the integer in roman numeral format
  const romanObj = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  }
  console.log(Object.keys(romanObj));
  // iterate through romanObj
    // if number is in obj return romanObj[i]
    // else if n % 5 is 4 then
    // else get greatest num that n is greater than
  // get the remainder of n - num and repeat pattern until the remainder is less than 5
  let romanNum = '';
  const integers = Object.keys(romanObj).map(Number);
  if (romanObj[n]) {
    return romanObj[n];
  }
  let i = 0;
  let num = n;
  let len = integers.length;
  let lastInt = integers[len-1];
  while (num >= integers[i] && i < len) {
    // iterate if num > int && num < integers[i+1]
    // then append to romanNUm
    // subtract integers[i] from num
    if (num > lastInt) {
      romanNum += romanObj[lastInt];
      num -= lastInt;
      i = -1;
    }
    if (num < integers[i+1]) {
      romanNum += romanObj[integers[i]];
      num -= integers[i];
      i = -1;
    }
    i++;
    // console.log(romanNum, 'i', i, 'num', num, 'int', integers[i], 'int +1', integers[i+1])
  }
  return romanNum;
}
console.log(romanNumeral(39));
module.exports = romanNumeral;
