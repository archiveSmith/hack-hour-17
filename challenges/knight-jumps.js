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
  if (typeof str !== 'string') return 0;
  let x = parseInt(str.charAt(1));
  let y = parseInt(str.charAt(3));
  if (Number.isNaN(x) ||
      Number.isNaN(y) ||
      x < 1 || x > 8 ||
      y < 1 || y > 8) return 0;

  const moves = [
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1]
  ];

  let possibleMoves = 0;
  for (let i = 0; i < moves.length; i += 1) {
    let newX = x + moves[i][0];
    let newY = y + moves[i][1];
    if (newX > 0 && newX < 9 && newY > 0 && newY < 9) possibleMoves += 1;
  }

  return possibleMoves;
}

module.exports = knightjumps;
