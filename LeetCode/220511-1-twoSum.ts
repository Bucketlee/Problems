// https://leetcode.com/problems/two-sum/

// 시간복잡도 O(n**2)
function twoSum(nums: number[], target: number): number[] {
  const result = [undefined, undefined];
  nums.forEach((num, i) => {
    for (let j = i+1; j < nums.length; j += 1) {
      if (num + nums[j] === target) {
        result[0] = i;
        result[1] = j;
        return;
      }
    }
  });
  return result;
}

// 결과
// Runtime: 182 ms, faster than 23.12% of TypeScript online submissions for Two Sum.
// Memory Usage: 44.6 MB, less than 72.38% of TypeScript online submissions for Two Sum.


// 시간복잡도 O(n)
function twoSum2(nums: number[], target: number): number[] {
  const obj = {};
  for (let i = 0; i < nums.length; i += 1) {
    const needNum = target - nums[i];

    if (obj[needNum]) {
      return [obj[needNum] - 1, i];
    }

    obj[nums[i]] = i + 1;
  }

  return undefined;
}

// 결과
// Runtime: 78 ms, faster than 87.36% of TypeScript online submissions for Two Sum.
// Memory Usage: 45 MB, less than 52.75% of TypeScript online submissions for Two Sum.


// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]