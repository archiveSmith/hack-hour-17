// Write a function "countTwos" that takes a number as an argument,
// n. The function will return the number of 2s encountered
// when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
    let counter = 0;
    let arr = [];
    for(let i=0; i<=num; i++) {
        arr.push(i.toString());
    }
    for(let i=0; i<arr.length; i++) {
      for(let e=0; e<arr[i].length; e++) {
        if(arr[i][e] === '2') {
          counter++
        }
      }
    }
  return counter;
  
}

module.exports = countTwos;