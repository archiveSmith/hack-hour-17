/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function findLargestVal (arr, val) {
  return arr.filter((i) => i <= val).sort((a, b) => b > a);
}

function solveKnapsack (items, weightAvailable) {
  const itemList = items.reduce((acc, item) => {
    acc[item.weight] = item.value;
    return acc;
  }, {});

  const sack = new Array(weightAvailable + 1).fill(0);

  for (let i = 1; i <= weightAvailable; i++) {
    let vals = findLargestVal(Object.keys(itemList), i);
    const possVals = [];
    vals.forEach((val) => {
      let holder = itemList[val];
      let prevSack = i - val;
      if (prevSack > 0 && prevSack !== +val) holder += itemList[prevSack] || 0;
      possVals.push(holder);
    });

    sack[i] = Math.max(...possVals);
  }
  console.log(sack);
  return Math.max(...sack);
}

let items = [{weight: 1, value: 3}, {weight: 2, value: 7}, {weight: 3, value: 5}];
// const itemList = items.reduce((acc, item) => {
//   acc[item.weight] = item.value;
//   return acc;
// }, {});
// console.log(findLargestVal(Object.keys(itemList), 3));
console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
