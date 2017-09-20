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

/*
drawStairs function:

takes in number signifying how many stairs
(from 1 to num)

print spaces and '*' based on those numbers

Store correct number of spaces and asterisks in order while counting up to n.
    (store set amount of spaces and fill in the remainder with asterisks)
    (spaces = n - 1)

For example, if n = 6, then store 5 spaces and 1 asterisk. Then, on the next line, store 4 spaces and 2 asterisks.

Repeat until complete, use variable(s) to keep track of spaces, asterisks, etc.

*/

function drawStairs(n) {
  let spaces = ''; // string of spaces
  let splats = ''; // string of asterisks

  for (let i = 1; i <= n; i++) {
    //The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
    spaces = ' '.repeat(n - i); //creates spaces if n = 6 then it will result in 5 spaces
    splats = '*'.repeat(i); //creates a single star at start
    console.log(spaces + splats);
  }
}


    /*
    var star = '*';
    var stair = "";
    var space = "-";
    var space2 = "";
    var stairCase = "";
    var result = [];
    var result2 = [];
    var total = 0;
    // for(var i = 1; i < n; i++){
    //     total = n - i;
    //     for(var y = 0; y < total; y++){
    //         result.push(star);
    //     }
    //     stair = result.join("");
    // }
    // console.log(stair);
    for(var i = 1; i <= n; i++){
        stair += star;
        result.push(stair);
    }
    for(var y = n; y > 1; y--){
        space2 += space; 
        result2[y] = space2;
    }
    for(var x = 0; x < result.length; x++){
        //console.log(result[x]);
        console.log(result2[x]);
    }

}
*/
drawStairs(6);

module.exports = drawStairs;
