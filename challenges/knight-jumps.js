// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

const knightjumps = (str) => {
  // convert string to numbers that we can work with
  const x = parseInt(str[1]);
  const y = parseInt(str[3]);
  // ensure starting position is on the board
  if (x > 8 || x < 1 || y > 8 || y < 1) throw new RangeError('Invalid board position');
  // possible moves based on the way a knight moves in chess
  const knightMoves = [
    -2, -1, -2, 1,
    2, 1, 2, -1,
    -1, 2, -1, -2,
    1, 2, 1, -2
  ];
  // keep track of valid possible moves
  let counter = 0;
  // loop over the 8 possible moves and determine if they are valid
  // a valid move is one that falls within the scope of the chess board
  for (let i = 0; i < knightMoves.length - 1; i += 2) {
    if (x + knightMoves[i] > 0
      && x + knightMoves[i] < 9
      && y + knightMoves[i + 1] > 0
      && y + knightMoves[i + 1] < 9) {
      counter++;
    }
  }
  return counter;
}

module.exports = knightjumps;
