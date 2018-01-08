// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  //edge case
  if(array.length < 2) return array;
  //start at the end
  for (let tail = array.length - 1; tail > 0; tail -= 1) {
    //start at the front
    for(let i = 0; i < tail; i+=1) {
      if(array[i] > array[i+1]) {
        [array[i+1], array[i]] = [array[i], array[i+1]];
      }
    }
  }
  return array;
}


module.exports = bubbleSort;
