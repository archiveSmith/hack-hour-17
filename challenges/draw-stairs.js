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
    if (n >= 1 && n <= 100) {
        for (let stars = 1; stars <= n; stars++) {
            let line = new Array(n - stars).fill(' ').join('').concat(new Array(stars).fill('*').join(''));
            console.log(line);
        }
    }
}


module.exports = drawStairs;
