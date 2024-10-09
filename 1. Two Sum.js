/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Solution 1 (Brute Force)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target) return [nums[i], nums[j]];
  //   }
  // }

  // Solution 2 (HashMap)
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap[complement] !== undefined) return [numMap[complement], i];

    numMap[nums[i]] = i;
  }
};
