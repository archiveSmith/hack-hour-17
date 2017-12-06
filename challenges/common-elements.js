// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  if (!Array.isArray(array1) ||
      !Array.isArray(array2) ||
      !Array.isArray(array3) ||
      !Array.isArray(array4) ||
      array1.length === 0 ||
      array2.length === 0 ||
      array3.length === 0 ||
      array4.length === 0) return 'Nothing in Common!';

  let longest = Math.max(array1.length, array2.length, array3.length, array4.length);
  let counts = {};
  for (let a = 0; a < 4; a += 1) {
    arr = arguments[a];
    let currCounts = {};
    for (let i = 0; i < longest; i += 1) {
      if (arr[i]) {
        let el = typeof arr[i] === 'number' ? 'NUM' + arr[i] : 'STR' + arr[i];
        if (!currCounts[el]) {
          currCounts[el] = true;
          if (counts[el]) counts[el] += 1;
          else counts[el] = 1;
        }
      }
    }
  }
  let output = [];
  Object.keys(counts).forEach((key) => {
    if (counts[key] === 4) {
      if (key.slice(0, 3) === 'NUM') {
        output.push(parseInt(key.slice(3)));
      }
      else output.push(key.slice(3));
    }
  });
  if (output.length > 0) return output;
  return 'Nothing in Common!';
}

module.exports = commonElements;
