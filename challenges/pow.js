/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    
    // let temp = base;
    // if(base === 0){
    //     return;
    // }else if(base === 1 || power === 0){
    //     return 1;
    // }else if(power === 1){
    //     return base;
    // }else if(power >= 1){
    //     for(let i = 1; i < power; i++){
    //         base = base * temp;
    //     }
    // }
    // return base;
    if(base === 0){
        return console.log("input a number greater than 0");
    }else if(base === 1 || power === 0){
        return 1;
    }else if(power === 1){
        return base;
    }else if(power > 1){
        power--; //power = 2
        return base * pow(base, power); //pow(9,2);
    }
}
//if 3 and 3
//3*3 = 9 power = 2
//9*3 = 27 power = 1 stops here

//base 3 power 3 = 27
//3 * 3 = 9 * 3 = 27

console.log(pow(3,3));

module.exports = pow;