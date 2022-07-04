// https://leetcode.com/problems/remove-element

function removeElement(nums: number[], val: number): number {
  let startIdx = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== val) {
      nums[startIdx] = nums[i];
      startIdx += 1;
    }
  }

  return startIdx;
};

// Runtime: 143 ms, faster than 5.04% of TypeScript online submissions for Remove Element.
// Memory Usage: 43.3 MB, less than 69.40% of TypeScript online submissions for Remove Element.
