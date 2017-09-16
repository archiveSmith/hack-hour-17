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
    // find mean of array
    let mean = Math.floor((array.reduce(function(sum, value) {
        return sum + value;
    }, 0)) / array.length);
    
    
    //find mode
    let modeNums = [];
    let modeCount = [];
    
    // for each num in array
    for (var x = 0; x < array.length; x++) {
        let number = array[x];
        
        if (checkDoubles(number) === -1) {
            modeNums.push(number);
            modeCount.push(1);
        }
        else if (checkDoubles(number) !== -1) {
            let index = checkDoubles(number);
            modeCount[index] = modeCount[index] + 1;
        }
    }
    
    // check if num exists in modeNums
    function checkDoubles(num) {
               // for each num in modeNums
        for (var y = 0; y < modeNums.length; y++) {
            if (num === modeNums[y]) {
                return y;
            }
        }
        return -1;
    }
    
    let highIndex = findHighest(modeCount);
    
    function findHighest(arrNums) {
        let high = 0;
        let highInd = 0;
        let highArr = [];
        
        for (var i = 0; i < arrNums.length; i++) {
            if (arrNums[i] > high) {
                high = arrNums[i];
                highInd = i;
            }
        }
        // find first potential mode
        highArr.push([high, highInd]);
        
        // check for potential repeats
        for (var j = 0; j < arrNums.length; j++) {
            if (arrNums[j] === highArr[0][0] && j !== highArr[0][1]) {
                highArr.push([arrNums[j],j]);
            }
        }
        
        let highVal = highArr[0][0];
        let highValInd = highArr[0][1];
        
        for (var k = 0; k < highArr.length; k++) {
            if (modeNums[highArr[k][1]] > highValInd){
                highValInd = highArr[k][1];
                highVal = highArr[k][[0]];
            }
            
        }

        if (modeCount[highValInd] === 1) {
            console.log("mode doesn't exist")
            return undefined;
        }
        return highValInd;
    }
    
    
    let mode = modeNums[highIndex];
    // console.log("mode " + mode);
    // console.log("mean " + mean);
    if (mode === mean) {
        return true;
    } else {
        return false;
    }
}

module.exports = modemean;

