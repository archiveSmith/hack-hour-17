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
  let high = Math.max(...stock_prices_yesterday);
  let highIndex = stock_prices_yesterday.indexOf(high);
  let low = Math.min(...stock_prices_yesterday);
  let lowIndex = stock_prices_yesterday.indexOf(Math.min(...stock_prices_yesterday));

  if (lowIndex < highIndex) {
    return high - low;
  }

  //if low comes after high in array
  let newArray = stock_prices_yesterday.slice(lowIndex);
  high = Math.max(...newArray);
  let difference = high - low;
  
  if (difference > 0) {
    return difference;
  }

  return 0;
 
}

module.exports = bestProfit;

console.log(bestProfit([76,23,56,44]));
