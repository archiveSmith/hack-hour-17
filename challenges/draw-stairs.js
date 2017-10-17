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
	function drawStairs(n) {
	//let start = n;
	let string = '';
	//starting from start, add asterisks and log and increment.
	for (let start = 0; start <= n; start++) {
	  //for each step, add that many asterisks.
	   for (let i = 0; i <= start; i++) {
	     string += '*';
	   }
	   console.log(string);
	   string = '';
	}
	}
}


module.exports = drawStairs;
