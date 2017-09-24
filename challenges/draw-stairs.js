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

// input: Number size
// output: string of *
function drawStairs(n) {
  // let symbol = '';
  //
  // for (let i = 0, j = n; i < n; i++) {
  //   symbol += ' '.padStart(j) + '*'.repeat(i) + '\n';
  //   // symbol += '*'.padStart(i);
  //   j -= 1;
  // }
  //
  // return symbol;
  if (!Number.isInteger(n) || n < 1 || n > 100 ) return;

  const space = ' ';
  const start = '*';
  var string = '';

  for (var i = 1; i <= n; i += 1) {
    string += space.repeat(n-i)+start.repeat(i)+'\n';
  }

  return string;
}

console.log(drawStairs(100));
module.exports = drawStairs;
