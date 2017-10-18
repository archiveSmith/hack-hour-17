/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
  // base case
  if (Array.isArray(stock_prices_yesterday) === false) {
    return 0;
  }
  
  // best case scenario first
  let max = Math.max(...stock_prices_yesterday);
  let min = Math.min(...stock_prices_yesterday);
  if (stock_prices_yesterday.indexOf(min) < stock_prices_yesterday.indexOf(max)) {
    return max - min;
  } 
  
  // more time consuming other cases if first case doesn't work
  let pairs = [];
  // create pairs by giving max that occurs after each index 
  for (let x = 0; x < stock_prices_yesterday.length-1; x++) {
    let pair = [stock_prices_yesterday[x]];
    let max = -Infinity;
    for (let y = x + 1; y < stock_prices_yesterday.length; y++) {
      if (stock_prices_yesterday[y] > max) {
        max = stock_prices_yesterday[y];
      }
    }
    pair.push(max);
    pairs.push(pair);
  }
  // console.log(pairs);
  // subtract min from max in each pair
  pairs.forEach(function(element,index) {
    pairs[index] = element[1]-element[0];
  });
  // find max result out of pairs and return 
  let result = Math.max(...pairs);
  return result;
}

module.exports = bestProfit;

// // Test
// var array = [200, 40, 20, 100, 70, 50, 120];
// console.log(bestProfit(array));
