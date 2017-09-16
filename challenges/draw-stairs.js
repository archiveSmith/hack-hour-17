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
    var arr = [];
    // for steps 1 to #steps n
    for (var x = 1; x <= n; x++) {
        
        // if current index x is less than #steps n
        if (x <= n) {
            var temp = [];
            // for each step, go through each of n spaces and push either " " or "*" to temp arr
            for (y = n; y > 0; y--) {
                if (y < x) {
                    temp.push("*");
                }
                else {
                    temp.push(" ");
                }
            }
            console.log(temp.join(""));
        }
        
        // final steps
        if ( x === n) {
            var temp = [];
            for (y = 0; y < x; y++) {
                temp.push("*");
            }
            console.log(temp.join(""));
        }
    }
}


module.exports = drawStairs;
