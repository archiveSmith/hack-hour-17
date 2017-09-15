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

function drawStairs(n) {
	for (let i = 1; i <= n; i++) {
		let str = '';

		// add spaces to str
		for (let j = 0; j < n - i; j++) {
			str += ' ';
		}

		// add stars to str
		for (let j = 0; j < i; j++) {
			str += '*';
		}

		console.log(str);
	}
}

drawStairs(100);


module.exports = drawStairs;
