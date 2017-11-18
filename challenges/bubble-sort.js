// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


// const arr = [6, 5, 3, 1, 8, 7, 2, 4]

function bubbleSort(array) {
  const length = array.length
  const sorted = array
  for (let j = 0; j < length; j += 1) {
    for (let i = 0; i < length; i += 1) {
      if (sorted[i] > sorted[i + 1]) {
        [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]]
      }
    }
  }
  return sorted
}

// console.log('return: ', bubbleSort(arr))

// 5 3 1 6 7 2 4 8

module.exports = bubbleSort
