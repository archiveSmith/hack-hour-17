/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

// input: array element of numbers
// output: return true of false, mean = mode

// loop through the array and all element in the array
// then divide by the length of the array to get the mean
// how to find mode ?
  // create an empty object to keep track of the account for each element occure
  // {element: count}
  // get the element.count with the greatest number
  // loop through the key element to see which key has the element.count
  // compare the mean === key value
function modemean(array) {
  let mean = 0;

  let meanElementArray = array;
  let modeObj = {};

  mean = meanElementArray.reduce((curr, next) => curr + next);

  mean = Math.floor(mean / array.length);

  // console.log(mean);

  meanElementArray.forEach((element) => {
    if (!modeObj[element]) {
      // console.log('index', index);
      modeObj[element] = 1;
    } else {
      modeObj[element] += 1;
    }
  });

  let modeArray = Object.values(modeObj);
  let mode = modeArray.sort((a, b) => a - b).pop();
  // console.log('mode', mode);
  //
  // console.log(mode === mean);
  return mode === mean;
}

// modemean([1, 2, 2, 3]);
// modemean([1, 4, 5, 6, 6]);

module.exports = modemean;
