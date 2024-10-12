const twoSum = (nums, target) => {
  let numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    numsMap[nums[i]] = i;
  }

  let result = [];

  for (let val of nums) {
    if (numsMap[target - val]) {
      result.push(numsMap[target - val]);
    }
  }

  console.log(result);
};
