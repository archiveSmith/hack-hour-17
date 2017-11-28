// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const x = Number.parseInt(str[1]);
  const y = Number.parseInt(str[3]);
  let totalMoves = 0;
  for (let i = -2; i < 3; i += 1) {
    if(i === 0) continue;
    const newX = x + i;
    if (newX > 0 && newX < 9) {
      const yPos = 3 - Math.abs(i);
      if (y + yPos > 0 && y + yPos < 9) {
        totalMoves += 1;
      }
      if (y - yPos > 0 && y - yPos < 9) {
        totalMoves += 1;
      }   
    }
  }
  return totalMoves;
}

module.exports = knightjumps;
