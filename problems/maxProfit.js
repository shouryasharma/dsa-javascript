const maxProfit = function (prices) {
  let [minIndex, maxIndex] = [0, prices.length - 1];
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] < prices[minIndex]) minIndex = i;
  }
  for (let i = minIndex; i < prices.length; i++) {
    if (prices[i] > prices[maxIndex]) maxIndex = i;
  }

  return prices[maxIndex] - prices[minIndex];
};
  
console.log([2, 4, 1]);
