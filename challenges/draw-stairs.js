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

/**
 * 
 * @param {*} n 
 * 
 * takes in number signigying how many stairs
 * (from 1 to num)
 * 
 * print spaces and '*' based on those numbers
 */
function drawStairs(n) {
  if (!Number.isInteger(n) || n < 1 || n > 100 ) return;

  for (let i = 1; i <= n; i += 1) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
  }
}

// console.log(drawStairs(6));
module.exports = drawStairs;
