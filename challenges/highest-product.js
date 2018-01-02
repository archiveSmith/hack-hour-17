/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

const highestProduct = (array) => {
  if (!array || !Array.isArray(array) || array.length < 3) return 0;
  // Store collection of smallest and biggest values in objects
  const smallest = { one: Infinity, two: Infinity };
  const biggest = { one: -Infinity, two: -Infinity, three: -Infinity };

  for (let i = 0; i < array.length; i += 1) {
    // Collect low values
    if (array[i] < smallest.one) [smallest.one, smallest.two] = [array[i], smallest.one];
    else if (array[i] < smallest.two) smallest.two = array[i];
    // Collect high values
    if (array[i] > biggest.one) [biggest.one, biggest.two, biggest.three] = [array[i], biggest.one, biggest.two];
    else if (array[i] > biggest.two) [biggest.two, biggest.three] = [array[i], biggest.two];
    else if (array[i] > biggest.three) biggest.three = array[i];
  }
  // Return higher product between the two configurations
  return Math.max(biggest.one * biggest.two * biggest.three, biggest.one * smallest.one * smallest.two);
};


module.exports = highestProduct;
