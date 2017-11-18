// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let temp, innerFlag=true, outerFlag=true;
  while(outerFlag) {
  for (let i=0; i<array.length-1; i++) {
    if (array[i]>array[i+1]) {
      temp = array[i];
      array[i] = array[i+1];
      array[i+1] = temp;
      innerFlag = false;
      }
    }
  
    if (innerFlag) outerFlag=false;
    innerFlag = true;
  }
  return array;
}

console.log(bubbleSort([6,54,3,6,8,3,563,453,42,2]))

module.exports = bubbleSort;
