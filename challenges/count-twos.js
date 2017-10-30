// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 
// 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
  let total = 0;
  if (num === 0) {
    return 0;
  }
  const numArr = num.toString().split('');
  total = numArr.filter(numChar => numChar === '2').length;
  return total + countTwos(num - 1);
}

module.exports = countTwos;