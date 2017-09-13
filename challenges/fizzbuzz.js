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


//first, use a solution using if/else statements. Then, if possible and have time, refactor.

//create an empty array called fizzBuzzed
//loop
//check if number is divisible by both 3 and 5.
//if they are, push 'fizzbuzz' to array.
//check if is divisible by 3.
//if so, push 'fizz' to array.
//check if is divisibile by 5.
//if so, push 'buzz' to array.
//if passing none of these, push number to array.
//include and stop at NUM.


function fizzbuzz(num) {
	let fizzBuzzed = [];
	for (var i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			fizzBuzzed.push('fizzbuzz');
		} else if (i % 3 === 0) {
			fizzBuzzed.push('fizz');
		} else if (i % 5 === 0) {
			fizzBuzzed.push('buzz');
		} else {
			fizzBuzzed.push(i);
		}
	}
	return fizzBuzzed;
}

module.exports = fizzbuzz;




