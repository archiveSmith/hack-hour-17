/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      2     ->    II
 *      3     ->    III
 *      4     ->    IV
 *      5     ->    V
 *      6     ->    VI
 *      7     ->    VII
 *      8     ->    VIII
 *      9     ->    IX
 *      10    ->    X
 *      11    ->    XI
 *      12    ->    XII
 *      13    ->    XIII
 *      14    ->    XIV
 *      15    ->    XV
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

let key = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

function romanNumeral(n) {
    if(n === 0 || typeof n !== 'number'){
        return undefined
    }else{
        var digits = String(+n).split("");
    }
    let i = 3;
    let romaNum = "";
    while (i--){
        romaNum = (key[+digits.pop() + (i * 10)] || "") + romaNum;
        return Array(+digits.join("") + 1).join("M") + romaNum;
    }


    // let roman = n.toString();
    // let romanArr = roman.split("")
    // for(let i = 0; i < romanArr; i++){
        
    // }
    // return romanArr
}

console.log(romanNumeral(1));

//module.exports = romanNumeral;
