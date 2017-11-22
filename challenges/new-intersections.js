/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections (x, y) {
  const left = Math.min(...x);
  const right = Math.max(...x);
  const top = Math.max(...y);
  const bottom = Math.min(...y);

  const width = right - left - 1;
  const height = top - bottom - 1;
  return width * height;
}

// console.log(newIntersections(
//   [1, 2, 1, 0],
//   [0, 1, 3, 1]
// ));

module.exports = newIntersections;
