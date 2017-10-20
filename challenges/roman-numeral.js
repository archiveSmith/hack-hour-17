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

const map = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

function romanNumeral(n, roman = '') {
//base case: if n < 1 return roman
  if (n < 1) return roman;
//convert map in an array of keys using Object.keys()
  const keys = Object.keys(map);
//loop over keys array using for loop (using forEach here would double the call stack!)
  for (let i = 0; i < keys.length; i += 1) {
  //if n >= the value at current key (map[keys[i]]), concat current value (keys[i]) to roman
  //make a recursive call, passing in n - value at current key (map[keys[i]]) and roman
    if (n >= map[keys[i]]) {
      roman += keys[i];
      return romanNumeral(n - map[keys[i]], roman);
    }
  }
}

module.exports = romanNumeral;

