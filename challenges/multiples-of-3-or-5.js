'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  // no inputs
  // output sum of all numbers evenly divisible by 3 or 5
  // check if multiple of 3 or 5
  // iterate up to 1000
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  // inputs x and y are multiples z is the limit
  // output sum
  // check if number is a multiple of x or y
  // iterate up to z
  let sum = 0;
  for (let i = 0; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      console.log(i)
      sum += i;
    }
  }
  return sum;
}


const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
