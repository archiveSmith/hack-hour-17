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
function modeMean(array){
  if (array.length === 0) return false; //base case
  // MEAN
  let sum = array.reduce((a, b) => {
    return a + b;
  });
  //will get the total of an array through the reduce method
  let mean = Math.floor(sum / array.length);
  //divide the sum by the number of integers. Math.floor rounds it to a clean number
  // MODE
  let numCount = array.reduce((obj, curr) => {
    obj[curr] ? ++obj[curr] : obj[curr] = 1;
    return obj;
  }, {});
  //numCount is equal to reduce(obj, curr)
  // if obj[curr] then obj+1[curr] else obj[curr] = 1

  let maxMode = -Infinity; // basically less than 0
  let maxFreq = 0;
  for (let num in numCount) { //iterate for the keys in object
    if (numCount[num] === maxFreq && num > maxMode) {
      maxMode = num;
    } else if (numCount[num] > maxFreq) {
      maxFreq = numCount[num];
      maxMode = num;
    }
  }
  return mean === parseInt(maxMode);
}

function mean(array) {
    //mean refers to average
    //mode refers to how many times a number appears
    //do each separately for now
    if(array.length === 0) return;
    var total = 0;
    var mean = 0;
    var mode = 0;
    for(var i = 0; i < array.length; i++){
        total += array[i]
    }
    mean = total / (array.length);
    return Math.floor(mean);
/*
    if(mean === mode) return true;
    else return false;

    var total2 = 0;
    var counter = 0;
    for(var i = 0; i < array.length; i++){

    }
    */
}
//0 [1,2,2,3]

console.log(modemean([2,7,9]));

module.exports = modemean;




function mode(array)
{
    var counter = 0;
    if(array.length == 0) //check if the user input is 0, then terminate the function
        return null;
    var modeMap = {}; //initialize an empty object
    var maxEl = array[0], maxCount = 1; //intialize variable to equal the first element of array and a maxCount starting at one
    tempCount = [];
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i]; //intialize a variable to equal array[i]
        if(modeMap[el] == null) //at the very first loop
            modeMap[el] = 1; //set the first key to one
        else //if not null
            modeMap[el]++;  //increment the value by 1
        if(modeMap[el] > maxCount) 
        {
            maxEl = el;
            maxCount = modeMap[el]; //maxcount is equal to the value of the key
        }

    }
    console.log(maxEl);
    console.log(maxCount);
    console.log(modeMap)
    var test = Object.entries(modeMap);
    console.log(test);
    /*
    console.log("maxCount of ", modeMap, " is ", maxCount);
    var test = Object.values(modeMap);
    console.log(test);
    if(counter > 0){
        mode(test);
        counter ++;
    }
    */
}

console.log(mode([2,2,3,3,3,3,5,5,5,5]));