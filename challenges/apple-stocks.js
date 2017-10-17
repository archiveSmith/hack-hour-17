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
    let possibleProfits = [];
    let purchased;
    let sold;
    let tempProfit;
    
    for (let i = 0; i < stock_prices_yesterday.length; i++) {
      purchased = stock_prices_yesterday[i];
      tempProfit = 0;
      for (let j = i+1; j < stock_prices_yesterday.length; j++) {
        sold = stock_prices_yesterday[j];
        temp = purchased - sold;
        if(temp > tempProfit){
          tempProfit = temp;
        }
      }
      possibleProfits.push(tempProfit);
    }
    let greatestProfit = possibleProfits[0];
    for (let k = 0; k < possibleProfits.length; k++) {
      if(possibleProfits[k] > greatestProfit) greatestProfit = possibleProfits[k];
    }
    return greatestProfit;
}

module.exports = bestProfit;
