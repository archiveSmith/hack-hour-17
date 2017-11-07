'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
<<<<<<< HEAD
  let num = 999;

  
  while ( num > 0) {
   if (num % 3 === 0 || num % 5 === 0) {
     sum += num;
     num -= 1;
   } else {
     num -= 1;
   }
  }
=======

>>>>>>> 9da56ca7103ce0e9b00628e36538b4e4d0d8a6aa
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
<<<<<<< HEAD
   x = x - 1;

  while (x > 0) {
    if (x % z === 0 || x % y === 0) {
      sum += x;
      x -= 1;
    } else {
      x -= 1;
    }
  }
  return sum;
}
=======

  return sum;
}

>>>>>>> 9da56ca7103ce0e9b00628e36538b4e4d0d8a6aa
const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
