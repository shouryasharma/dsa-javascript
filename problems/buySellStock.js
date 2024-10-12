const maxProfit = function (prices) {
  let [buy, sell, maxProfit] = [0, 1, 0];

  while (sell < prices.length) {
    let profit = prices[sell] - prices[buy];
    if (profit > maxProfit) maxProfit = profit;
    if (prices[sell] < prices[buy]) buy = sell;
    sell++;
  }

  return maxProfit;
};

console.log("maxProfit: ", maxProfit([2, 4, 1]));
console.log("maxProfit: ", maxProfit([7, 1, 5, 3, 6, 4]));
