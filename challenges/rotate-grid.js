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
 *                  sampleGrid after:   [   [7, 4, 1],     ==> 3, 2, 1
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *                  sampleGrid after:   [   [4, 1, 7],      ==> 2, 1, 3
 *                                          [5, 2, 8],
 *                                          [6, 3, 9]  ]
 *                  sampleGrid after:   [   [1, 7, 4],     ==> 1, 2, 3
 *                                          [2, 8, 5],
 *                                          [3, 9, 6]  ]
 *
 * BONUS: Do this in place
 */

// i = 3
// 

function rotateGrid(grid, n) {
// grid[2][0] = new[0][0]
// grid[2][1] = new[1][0]
// grid[2][2] = new[2][0]

// grid[1][0] = new[0][1]
// grid[1][1] = new[1][1]
// grid[1][2] = new[2][1]

// grid[0][0] = new[0][2]
// grid[0][1] = new[1][2]
// grid[0][2] = new[2][2]

// n - n = 0.. so while n-n >= 0


// for (let i = 0; i < grid.length; i ++) {
  // let block = n - i
    //for (let j = 0; i < grid.length; j ++) {
      // grid[n-1][j] = new[j][i]

}


module.exports = rotateGrid;

const sampleGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(sampleGrid, 3));
