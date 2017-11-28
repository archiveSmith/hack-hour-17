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

function pascalTriangle (numRows) {
  if (numRows === 1) return [[1]];
  const triangle = pascalTriangle(numRows - 1);
  const newRow = [1];
  const prevRow = triangle[numRows - 2] ? triangle[numRows - 2] : [];
  for (let i = 0; i < prevRow.length - 1; i++) {
    newRow.push(prevRow[i] + prevRow[i + 1]);
  }
  newRow.push(1);
  triangle.push(newRow);
  return triangle;
}

module.exports = pascalTriangle;
