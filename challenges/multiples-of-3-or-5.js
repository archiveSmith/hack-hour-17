'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000 () {
  let sum = 0;
  let upper = 1000 - 1;

  let threes = Math.floor(upper / 3);
  let fives = Math.floor(upper / 5);
  let both = Math.floor(upper / (5 * 3));

  sum += 3 * (threes * (threes + 1)) / 2;
  sum += 5 * (fives * (fives + 1)) / 2;
  sum -= 15 * (both * (both + 1)) / 2;

  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ (x, y, z) {
  let sum = 0;
  let upper = z - 1;

  let xs = Math.floor(upper / x);
  let ys = Math.floor(upper / y);
  let xy = Math.floor(upper / (y * x));

  sum += x * (xs * (xs + 1)) / 2;
  sum += y * (ys * (ys + 1)) / 2;
  sum -= (x * y) * (xy * (xy + 1)) / 2;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;
