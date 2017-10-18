/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  let gridArr = [];
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      gridArr.push(grid[x][y]);
    }
  }

  let newArr = gridArr;
  let incr = n-1;
  row
 //for 1st row n length, start by moving n-1 and increment n-1 each time
 for (let i = 0; i < gridArr.length; i += n) {
  
  
 }

  return newArr;
}

let grid =[ [1, 2, 3], [4, 5, 6],[7, 8, 9] ];
let n = 3;
console.log(rotateGrid(grid,n));

module.exports = rotateGrid;
