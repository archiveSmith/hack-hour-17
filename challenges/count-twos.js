// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos (num) {
  // let numTwos = 0;
  // if(num < 2 && num/10 > 0) {
  //   return false;
  // } else {
  //   numTwos += 1;
  // }

  // num = Math.floor(num/10);

  // for(let i = 0; num > 0; num =  Math.floor(num/10)) {
  //   console.log(num, numTwos)
  //   if(num%10 === 0) {
  //     numTwos += 10 * numTwos;
  //   } else {
  //     numTwos += (num%10) * numTwos;
  //   }
  //   if(num%10 >= 2) {
  //     numTwos += Math.pow(10,i);
  //   }
  //   i++;
  // }

  // return numTwos;

  let originalNum = num;
  let power = 1;
  let i = 0;
  let numTwos = 0;

  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);

    numTwos += Math.floor(digit * (power * i) / 10);

    if (digit > 2) { numTwos += power; } else if (digit == 2) { numTwos += originalNum % power + 1; }

    power *= 10;
    i++;
  }

  return numTwos;
}

console.log(
  [
    countTwos(1),  // -> 0
    countTwos(3),  // -> 1
    countTwos(13),  // -> 2
    countTwos(20),  // -> 3
    countTwos(1000),  // -> 300
    countTwos(11420) // -> 4483
  ]);

module.exports = countTwos;
