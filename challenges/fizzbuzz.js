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
    let arr = [];
    if (num === 0) return [0];
    if (num === undefined) return arr;
    if (num > 0) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push('fizzbuzz');
        } else if (i % 3 === 0) {
            arr.push('fizz');
        } else if (i % 5 === 0) {
            arr.push('buzz');
        } else {
            arr.push(i);
        }
    }
    return arr;
}
    if (num < 0) {
        for (let i = num; i <= -1; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                arr.push('fizzbuzz');
            } else if (i % 3 === 0) {
                arr.push('fizz');
            } else if (i % 5 === 0) {
                arr.push('buzz');
            } else {
                arr.push(i);
            }
        }
    }
    return arr;
}


function fizzBuzz(num) {
    function fizzBuzzRecursive(num) {
      var results = [];
      if (num === 1) {
        return '1';
      } else {
        if (num % 3 === 0 && num % 5 === 0) {
          results.push('FizzBuzz');
        } else if (num % 5 === 0) {
          results.push('Buzz');
        } else if (num % 3 === 0) {
          results.push('Fizz');
        } else {
          results.push(''+ num);
        }
      }
    }
    return results.concat(fizzBuzzRecursive(n - 1));
}
   


module.exports = fizzbuzz;

//return array
//iterate throught every numbers(i)
// if i % 3 and 5 = 0 return fizzbuzz
// if i % 3 = 0 return fizz
// if i % 5 = 0 return buzz

