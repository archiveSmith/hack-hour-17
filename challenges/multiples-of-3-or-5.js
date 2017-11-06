'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let xSum = 0;
  let ySum = 0;
  const x = 3;
  const y = 5;
  const z = 1000;
  let i = 0;
  while(xSum < z || ySum < z) {
    i += 1;
    xSum = i * x;
    if (xSum < z) {
      sum += xSum;
    }
    ySum = i * y;
    if (ySum < z) {
      sum += ySum;
    }
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let xSum = 0;
  let ySum = 0;
  let i = 0;
  while(xSum < z || ySum < z) {
    i += 1;
    xSum = i * x;
    if (xSum < z) {
      sum += xSum;
    }
    ySum = i * y;
    if (ySum < z) {
      sum += ySum;
    }
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
