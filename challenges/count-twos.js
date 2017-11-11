// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  // input number
  // output number of twos while counting up to target
  // iterate up to num
  // convert to string
  // iterate through string and count 2s
  let twoCount = 0;
  for (let i = 0; i <= num; i++) {
    let digits = i.toString().split('');
    twoCount += digits.reduce(function(acc, digit, i) {
      if (digit === '2') {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  }
  return twoCount;
}
console.log(countTwos(11420));
module.exports = countTwos;