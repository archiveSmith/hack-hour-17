// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// Method 2
function countTwos(num) {
  let string;
  let count  = 0;

  for (x = 1; x <= num; x++) {
    string = x.toString();

    if (string.match(/2/g)) {
      count = count + string.match(/2/g).length;
    }

  }
  return count;
}

// Method 1
// function countTwos(num) {
//   let string;
//   let count  = 0;

//   for (x = 1; x <= num; x++) {
//     string = x.toString().split('');
    
//     for (y = 0; y < string.length; y++) {
//       if (string[y] === '2') {
//         count++;
//       }
//     }

//   }
//   return count;
// }

module.exports = countTwos;

console.log(countTwos(11420));