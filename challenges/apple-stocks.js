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

  if (!Array.isArray(stock_prices_yesterday)) return 0;

  var currentBest = {
    start: 0,
    end: 1,
    profit: 0 // starting at 0 guarantees our loop will only be storing positive values as profit
    // and will return 0 if array values always decrease
  };

  for (var i = 0; i < stock_prices_yesterday.length; i += 1) {
    for (var j = i + 1; j < stock_prices_yesterday.length; j += 1) {
      if (stock_prices_yesterday[j] - stock_prices_yesterday[i] > currentBest.profit) {
        currentBest.start = i;
        currentBest.end = j;
        currentBest.profit = stock_prices_yesterday[j] - stock_prices_yesterday[i];
      }
    }
  }
  return currentBest.profit;
}

module.exports = bestProfit;
