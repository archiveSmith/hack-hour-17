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
    let star = "";
    // edge case
    if (n < 0 || n > 100) {
        return 'Error';
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < n - j - 1) {
                star += " ";
            } else {
                star += "*";
            }
        }
        star += '\n'
    }
    console.log(star)
}


module.exports = drawStairs;
