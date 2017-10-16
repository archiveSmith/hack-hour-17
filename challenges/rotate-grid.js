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
    let numSquare = Math.floor(n/2);

    // rotate one square at a time
    for(let i = 0; i < numSquare ; i++) {
        const holder = i === 0 ? grid[i].slice() : grid[i].slice(i,-i);
        // rotate to right side
        const size = n-i-1;
        for(let row = i; row < holder.length + i; row++) {
            let tmp = grid[row][size];
            grid[row][size] = holder[row];
            holder[row] = tmp;
        }
        
        // rotate to bottom
        console.log(holder);
        holder.reverse();
        for(let col = size; col >=0; col--) {
            let tmp = grid[size][col];
            grid[size][col] = holder[col];
            holder[col] = tmp;
        }

        console.log(holder);
    }

    console.log(grid);
}

let sampleGrid = [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]  
                ];  
          
rotateGrid(sampleGrid, 3);

module.exports = rotateGrid;
