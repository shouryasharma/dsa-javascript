function sockMerchant(n, ar) {
  // Write your code here
  let [pairs, sockMap] = [0, {}];

  for (let val of ar) {
    if (sockMap[val]) sockMap[val] += 1;
    else sockMap[val] = 1;
  }

  console.log("sockMap: ", sockMap);

  for (let val in sockMap) {
    if (sockMap[val] > 1) pairs += Math.floor(sockMap[val] / 2);
  }

  return pairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
