/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/


// using repeat func

function drawStairs(n) {
	const asterisk = '*';
	const wspace = ' ';
	let str = '';
	
	for (let i = 1; i <= n; i += 1) {
		str += wspace.repeat(n-i) + asterisk.repeat(i);
		if (i !== n) str += '\n';
	}
	console.log(str);
}

// without using repeat() func

function drawStairs2(n) {
	for (let i = 1; i <= n; i += 1) {
		let str = '';
		let j = n - i;
		while (j > 0) {
			str += ' ';
			j -= 1;
		}
		let k = i;
		while (k > 0) {
			str += '*';
			k -= 1;
		}
		console.log(str);
	}
}

// drawStairs(15);

module.exports = drawStairs;
