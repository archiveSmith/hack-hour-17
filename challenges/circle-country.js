/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry (x, y, r, start_x, start_y, end_x, end_y) {
  // check how many circles start is in
  // check how many circles end is in
  // don't include any circles both are in

  let crossings = 0;

  function calculateDistance (x1, y1, x2, y2) {
    let distance = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
    distance = Math.sqrt(distance);
    return distance;
  }

  for (let i = 0; i < x.length; i++) {
    let startDistance = calculateDistance(start_x, start_y, x[i], y[i]);
    let endDistance = calculateDistance(end_x, end_y, x[i], y[i]);
    if (startDistance <= r[i] && endDistance >= r[i]) {
      crossings += 1;
    }
    if (startDistance >= r[i] && endDistance <= r[i]) {
      crossings += 1;
    }
  }

  return crossings;
}

// console.log(circleCountry([0, -6, 6], [0, 1, 2], [2, 2, 2], -5, 1, 5, 1));
// console.log(circleCountry([1, -3, 2, 5, -4, 12, 12], [1, -1, 2, 5, 5, 1, 1], [8, 1, 2, 1, 1, 1, 2], -5, 1, 12, 1));
// console.log(circleCountry([-3, 2, 2, 0, -4, 12, 12, 12], [-1, 2, 3, 1, 5, 1, 1, 1], [1, 3, 1, 7, 1, 1, 2, 3], 2, 3, 13, 2));
// console.log(circleCountry([-107, -38, 140, 148, -198, 172, -179, 148, 176, 153, -56, -187], [175, -115, 23, -2, -49, -151, -52, 42, 0, 68, 109, -174], [135, 42, 70, 39, 89, 39, 43, 150, 10, 120, 16, 8], 102, 16, 19, -108));
module.exports = circleCountry;
