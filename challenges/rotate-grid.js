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

function rotateGrid(grid, n, rotations) {
  if(!Array.isArray(grid) || n === undefined || typeof n !== 'number' || grid.length !== n) return;
  if(rotations === undefined) rotations = n;
  if(n === 0 || rotations === 0) return grid;

  for(let i = 0; i < n; i++){
    if(i === 0) {
      grid[i][]
    }
  }
}

// console.log(rotateGrid([[3,4,7],[2,5,8],[1,6,9]],3));

module.exports = rotateGrid;
