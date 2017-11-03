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
 if(n < 1 || n > 100) {
   return;
 }
  for (let i = 1; i <= n; i += 1) {
    var step = '';
    for (let j = n; j > 0; j -= 1) { 
      step += j > i ? ' ' : '*';
    }
    console.log(step);
  }
}


module.exports = drawStairs;
