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
  let array = [];
  let inner = [];
  for (let i=1;i<=numRows;i++) {
    inner.push(1);
    if (i>1)
      inner.push(1);
      array.push(inner);
      inner = [];
  }
  for (let j=1; j<array.length-1; j++) {
    for (let k = 0; k < array[j].length; k++) {
      if (array[j][k+1]) {
        array[j+1].splice(k+1,0,array[j][k]+array[j][k+1])
      }
    }
  }
  return array;
}

console.log(pascalTriangle(6));
module.exports = pascalTriangle;
