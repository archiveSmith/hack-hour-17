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
 const romanArray = ['0','I','II','III','IV','V','VI','VII','VIII','IX'];

 const tensArray = ['0','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'];

 const hunsArray = ['0', 'C','CC','CCC','CD','D','DC','DCC','DCCC','CM','M'];

 let numSplit = n.toString().split('');
 let numSize= numSplit.length;
 return numSplit.reduce((acc,curr,index) => {
    if (Math.pow(10,numSize-index-1)===1000) {
      curr = Number(curr);
      acc+= hunsArray[10];
    }
    if (Math.pow(10,numSize-index-1)===100) {
      curr = Number(curr);
      acc+= hunsArray[curr];
    }
    if (Math.pow(10,numSize-index-1)===10) {
      curr = Number(curr);
      acc+= tensArray[curr];
    }
    if (Math.pow(10,numSize-index-1)===1) {
      curr = Number(curr);
      acc+= romanArray[curr];
    }
    return acc;
 },"")
}

console.log(romanNumeral(123));
module.exports = romanNumeral;
