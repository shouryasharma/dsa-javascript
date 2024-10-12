const twoSum = (nums, target) => {
  let numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (numsMap[diff] !== undefined) return [numsMap[diff], i];
    else numsMap[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
