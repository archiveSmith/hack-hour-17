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


function modemean(array) {
    
    //mean 
    let sum = array.reduce((x,y) => x + y);
    let length = array.length
    let mean = Math.floor(sum/length);
    
    //Mode//
    //build table to tally values
    let tally = array.reduce((x,y) => {
        if(y in x){
            x[y] += 1
        }else{
            x[y] = 1
        }
        return x;
    },{});
  
   //find the high number of tally object
   let highNum =  Math.max(...Object.values(tally));
   
   //get the highest number from tally object
   let getVal = (obj, val) => Object.keys(obj).find(key => obj[key] === val);
  
   let highTally = Number(getVal(tally, highNum));
 
   return mean == highTally;
}

module.exports = modemean;
