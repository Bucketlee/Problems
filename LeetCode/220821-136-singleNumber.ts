// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i+1]) {
      return nums[i];
    }
  }
};

// Runtime: 142 ms, faster than 29.99% of TypeScript online submissions for Single Number.
// Memory Usage: 46.1 MB, less than 53.95% of TypeScript online submissions for Single Number.
