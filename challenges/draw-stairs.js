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
  let str = ''
  if(n < 1 && n> 100) {
  	return;
  }
  for(var i=1; i<=n; i++) {
    if(i<n) {
    str += ' '.repeat(n-i) + '*'.repeat(i) + '\n'
    }
    else if(i===n) {
      str += ' '.repeat(n-i) + '*'.repeat(i)
    }
    }
    console.log(str)

}

module.exports = drawStairs;
