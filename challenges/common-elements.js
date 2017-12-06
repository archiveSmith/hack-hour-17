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
  let cache_outer = {};
  let final = [];
  tot_arr = [];
  tot_arr.push(array1)
  tot_arr.push(array2)
  tot_arr.push(array3)
  tot_arr.push(array4)

  for (let i=0; i<tot_arr.length; i++) {
    let cache_inner = {};
      for (let j=0; j<tot_arr[i].length; j++) {
        if (!cache_inner[tot_arr[i][j]]) {
            cache_inner[tot_arr[i][j]] = 1;
            if (cache_outer[tot_arr[i][j]])
              cache_outer[tot_arr[i][j]]++;
            else cache_outer[tot_arr[i][j]] = 1;
          }
      }
    }
    for (let k in cache_outer) {
      if (cache_outer[k] === 4)
        final.push(k)
    }
    return final;
}

console.log(commonElements([1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000],
                            [15,9,9,'ferret',9,26,12,12,'dog'],
                            [23,12,12,77,'ferret',9,88,100,'dog'],
                            ['ferret',12,12,45,9,66,77,78,2000]))
module.exports = commonElements;
