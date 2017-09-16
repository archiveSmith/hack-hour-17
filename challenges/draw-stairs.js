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
  // n btwn 1 and 100
  // aster length always === n
  // iterate and concat space until length - i
  // else concat *
  // print the aster
  let stair = '';
  let space = ' ';
  let aster = '*';
    for (let i = 1; i <= n; i++) {
      stair = '';
      for (let g = 1; g <= n-i; g++) {
        stair += space;
      }
      for (let g = 1; g <= i; g++) {
        stair += aster;
      }
      console.log(stair)
    }
}
drawStairs(5)

module.exports = drawStairs;
