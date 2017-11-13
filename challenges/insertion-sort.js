// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let input = Array.from(array);
  let output = [input.shift()];
  while (input.length !== 0) {
    let inserted = false;
    for (let i = 0; i < output.length; i += 1) {
      if (input[0] < output[i]) {
        output = output.slice(0, i).concat(input.shift(), output.slice(i));
        inserted = true;
        break;
      }
    }
    if (!inserted) output.push(input.shift());
  } 
  return output;
}

module.exports = insertionSort;