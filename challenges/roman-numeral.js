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
  if(typeof n !== 'number' || n < 1) return false;
  // const rNTable = [{1:'I'},{4:'IV'},{5:'X'},{9:'IX'},{10:'X'},{40:'XL'},{50:'L'},{90:'XC'},{100:'C'},{400:'CD'},{500:'D'},{900:'CM'},{1000:'M'}];
  const rNTable = {1:'I',4:'IV',5:'X',9:'IX',10:'X',40:'XL',50:'L',90:'XC',100:'C',400:'CD',500:'D',900:'CM',1000:'M'};
  const numerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const numbers = Object.keys(rNTable);
  let i = 0;
  // console.log('n is ', n);
  while(numbers[i] < n){
    // console.log('current number key', numbers[i]);
    i++;
  }
  if(numbers[i-1] === 1) return 'I';
  console.log('i is ', i, ' for n ', n);
  console.log('rNTable is ', rNTable[numbers[i] - 1]);
  return rNTable[numbers[i-1]] + romanNumeral(n - numbers[i - 1]);
}

// TESTS
console.log('8 ==> IIX ==> ', romanNumeral(8));
// console.log('400 ==> CD ==> ', romanNumeral(400));
// console.log('233 ==> CCXXXIII ==> ', romanNumeral(233));

module.exports = romanNumeral;
