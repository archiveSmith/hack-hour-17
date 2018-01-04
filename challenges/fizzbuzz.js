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

// one version
function fizzbuzz(num) {
  const arr = [];
  for (let i = 1; i <= num; i += 1) {
		let str = '';
		if (i % 3 === 0) str += 'fizz';
		if (i % 5 === 0) str += 'buzz';
		arr.push(str || i);
	}
  return arr;
}

// second version
function fizzbuzz2(num) {
  const arr = [];
  for (let i = 0; i <= num; i += 1) {
		let str = '';
		if (num % 15 === 0) str = 'fizzbuzz'
		else if (num % 3 === 0) str = 'fizz';
		else if (num % 5 === 0) str = 'buzz'
		arr.push(str || i);
	}
	return arr;
}

// console.log(fizzbuzz(100));

module.exports = fizzbuzz;
