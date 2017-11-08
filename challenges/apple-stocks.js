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

function bestProfit (stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday)) { return 0; }
  const stocks = stock_prices_yesterday;
  let min = stocks[0];
  let max = stocks[0];
  let profit = 0;

  for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] > max) {
      max = stocks[i];
    } else if (stocks[i] < min) {
      if ((max - min) > profit) { profit = max - min; }
      min = stocks[i];
      max = stocks[i];
    }
  }

    // if((max - min) > profit)
    //     profit = max - min;

    // return profit;
  return (max - min) > profit ? max - min : profit;
}

console.log(bestProfit([7, 5, 4, 1, 2, 4, 3, 7, 0, 7, 3]));

module.exports = bestProfit;
