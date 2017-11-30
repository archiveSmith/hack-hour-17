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
  const triangle = new Array(numRows)
    .fill(null)
    .map((row, i) => row = [])
  triangle.forEach((row, index) => {
    if (index === 0) row.push(1)
    else {
      for (let i = 0; i <= index; i += 1) {
        const prev = triangle[(index - 1)]
        if (prev[i - 1] && prev[i]) row[i] = (prev[i - 1] + prev[i])
        else row[i] = 1
      }
    }
  })
  return triangle
}

// console.log(pascalTriangle(6))

module.exports = pascalTriangle;
