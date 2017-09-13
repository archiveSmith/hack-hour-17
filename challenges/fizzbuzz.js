// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
    // SECOND TRY
    for (let x = 1; x <= num; x++) {
        (x % 3 === 0) ? output.push("fizz") : (x % 5 === 0) ? output.push("buzz") : (x % 3 === 0 && x % 5 === 0) ? output.push("fizzbuzz") : output.push(x) ;
        }
        
        return output;
    
    // FIRST TRY
    // let arr = [];
    
    // for (let x = 1; x <= num; x++) {
    //     if (x % 3 === 0 && x % 5 === 0){
    //         arr.push("fizzbuzz");
    //     } else if (x % 3 === 0) {
    //         arr.push("fizz");
    //     } else if (x % 5 === 0) {
    //         arr.push("buzz");
    //     } else {
    //         arr.push(x);
    //     }
    // }
    // return arr;
}

module.exports = fizzbuzz;
