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
  if (!numRows || typeof numRows !== 'number') return [];
  const output = [];
  for (let i = 0; i < numRows; i += 1) {
    if (i === 0) output.push([1]);
    if (i === 1) output.push([1,1]);
    if (i > 1) {
      let arr = [1];
      let previous = output[i - 1];
      for (let j = 0; j < previous.length; j += 1) {
        if (previous[j + 1]) arr.push(previous[j] + previous[j + 1]);
      }
      arr.push(1);
      output.push(arr);
    }
  }
  return output;
}

module.exports = pascalTriangle;
