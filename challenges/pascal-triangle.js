/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  const retArr = [];
  if (numRows > 0) retArr.push([1]);
  for (let i = 0; i < numRows - 1; i += 1) {
    const thisRow = [1];
    const prevRow = retArr[retArr.length - 1];
    let pos1 = 0, pos2 = 1;
    while (pos2 < prevRow.length) {
      thisRow.push(prevRow[pos1++] + prevRow[pos2++]);
    }
    thisRow.push(1);
    retArr.push(thisRow);
  }
  return retArr;
}

module.exports = pascalTriangle;
