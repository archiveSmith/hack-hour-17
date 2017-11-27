// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(x, y) {
  let x1 = 8 - x >= 2 ? 3 : 8 - x;
  let x2 = x >= 3 ? 3 : x;
  
  let y1 = 8 - y >= 2 ? 3 : 8 - y;
  let y2 = y >= 3 ? 3: y;
  
  let area = (x1 + x2 - 1) * (y1 + y2 - 1);
  
  if (area === 25) return 8;
  if (area === 20) return 6;
  if (area === 16) return 4;
  if (area === 15) return 4;
  if (area === 12) return 3;
  if (area === 9) return 2;
}

module.exports = knightjumps;
