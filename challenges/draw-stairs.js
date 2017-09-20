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
    //n <=100 & n < >= 0
    let space = ' ';
    let star = '*';
    for(let i = 1; i <= n; i++){
        console.log(space.repeat(n-i) + star.repeat(i));
      }
}

// module.exports = drawStairs;

// console.log(' '.repeat(4) + '*'.repeat(1));
console.log(drawStairs(5));