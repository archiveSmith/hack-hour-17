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
    let stair = "";
    // edge case
    if (n < 0 || n > 100) {
        return 'Error';
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i < n - j - 1) {
                stair += " ";
            } else {
                stair += "*";
            }
        }
        stair += '\n'
    }
    console.log(stair)

    // let stair = '';
    // for (var i = 1; i <= n; i++) {
    //     stair += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
    // }
    // return stair;
=======

>>>>>>> 33f042bb7b5fe675eb799a30535e4dc5c19cf066
}


module.exports = drawStairs;
