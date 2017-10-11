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
  let romanString = "";

  //if larger than 1000
  if (n >= 1000) {
    let multiplier = Math.floor(n/1000);
    romanString+="M".repeat(multiplier);
    // romanString += lessThanM (n%1000);
  }

  // function lessThanM (n) {
  //   let string = "";
  //   if (n >= 500) {
  //     string += "D";
  //     string += lessThan500(n%900);
  //     return string;
  //   }
  //   if (n >= 900) {
  //     string += "CM";
  //     string += lessThan500(n%900);
  //     return string;
  //   }
 //  }
  function below40s (n) {
    let string = "";
    let num;
    if (n >= 40) {
      string+= "XL";
      num = n - 10;
      string+="X".repeat(Math.floor(num/10));
      string += lessThan10(num%10);
    }
  }
//need to wrap this in function for #s 39 - 11
  if (n >= 10) {
    let multiplier = Math.floor(n/10);
    romanString+="X".repeat(multiplier);
    romanString += lessThan10 (n%10);
  }

//if remainder or n is less than 10
  if (n < 10) {
    return lessThan10 (n);
  }

  function lessThan10 (n) {
    let string = "";
    if (n <= 3) {
      string+="I".repeat(n);
      return string;
    }
    if (n === 4) {
      string+="IV";
      return string;
    }
    if (n%5 === 0) {
      string+="V";
      return string;
    }
    if (n > 5 && n <= 8) {
      let num = n-5;
      string+="V";
      string+="I".repeat(num);
      return string;
    }
  }

  return romanString;

}

module.exports = romanNumeral;

console.log(romanNumeral(48));
