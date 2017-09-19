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
<<<<<<< HEAD
    var step = '';
    if (n < 0 || n > 100) return;
    for (var i = 1; i <= n; i++) {
        step += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    return step; 
=======

>>>>>>> a68eaeded4afcd23dbb19083bc1a00b412342367
}


module.exports = drawStairs;
