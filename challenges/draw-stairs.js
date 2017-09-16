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
    for(var floor = 1; floor <= n; floor++) {
        console.log(' '.repeat(n-floor) + '*'.repeat(floor));         
      }
=======

>>>>>>> 33f042bb7b5fe675eb799a30535e4dc5c19cf066
}


module.exports = drawStairs;
