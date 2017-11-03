/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  // let earliest = Infinity;
  // let latest = -Infinity;
  // for(let meeting of array) {
  //   if(meeting[0] < earliest) {
  //     earliest = meeting[0];
  //   }
  //   if(meeting[1] > latest) {
  //     latest = meeting[1];
  //   }
  // }

  // const meetingTimes = new Array(latest+1).fill(0);
  // for(let meeting of array) {
  //   meetingTimes[meeting[0]] -= 1;
  //   meetingTimes[meeting[1]] += 1;
  // }

  // const newRanges = [];
  // let potentialRange = [];
  // let meetingCount = 0;
  // for(let i = earliest; i < meetingTimes.length; i += 1) {
  //   meetingCount += meetingTimes[i];
  //   if(potentialRange.length === 0 && meetingCount === -1) {
  //     potentialRange.push(i);
  //   }
  //   if(potentialRange.length === 1 && meetingCount === 0) {
  //     potentialRange.push(i);
  //     newRanges.push(potentialRange);
  //     potentialRange = [];
  //   }
  // }

  const meetingTimes = {};
  for (let meeting of array) {
    meetingTimes[meeting[0]] = meetingTimes[meeting[0]] - 1 || -1;
    meetingTimes[meeting[1]] = meetingTimes[meeting[1]] + 1 || +1;
  }

  let meetingEnd = 0;
  let combinedMeeting = [];
  const newRanges = [];
  for (let time of Object.keys(meetingTimes)) {
    meetingEnd += meetingTimes[time];
    if (combinedMeeting.length === 0 && meetingEnd === -1) {
      combinedMeeting.push(+time);
    }
    if (combinedMeeting.length === 1 && meetingEnd === 0) {
      combinedMeeting.push(+time);
      newRanges.push(combinedMeeting);
      combinedMeeting = [];
    }
  }

  return newRanges;
}

// var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
// console.log(mergeRanges(times)); //-> [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
