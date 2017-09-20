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
// create result variable
let stairs = "";
// create a for loop to iterate through number of stairs 
  for (let i = 1; i < n; i++) {
    //create number of spaces(n - i) concat with stair (n) except for last
    stairs += ' '.repeat(n-i) + '*'.repeat(i) + '\n';
  }
  //*last stairs without training return character. 
  stairs += '*'.repeat(n);
// return result;
return stairs;
}


module.exports = drawStairs;
