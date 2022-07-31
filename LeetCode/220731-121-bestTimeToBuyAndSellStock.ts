// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = 0;

  let maxStock = 0;
  for (let i = 1; i < prices.length; i += 1) {
    const target = prices[i];
    if (min > target) {
      min = target;
      max = target;
      continue;
    }

    if (target > max) max = target;

    if (max - min > maxStock) maxStock = max - min;
  }

  return maxStock;
};

// Runtime: 133 ms, faster than 57.63% of TypeScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 51.4 MB, less than 94.74% of TypeScript online submissions for Best Time to Buy and Sell Stock.


// // 다른이 풀이 : javascript

// var maxProfit = function(prices) {
//   var min = Number.MAX_SAFE_INTEGER;
//   var max = 0;
//   for (var i = 0; i < prices.length; i++) {
//       min = Math.min(min, prices[i]);
//       max = Math.max(max, prices[i] - min);
//   }
//   return max;
// };
