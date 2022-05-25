// https://leetcode.com/problems/remove-duplicates-from-sorted-array

function removeDuplicates(nums: number[]): number {
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

// Runtime: 252 ms, faster than 9.15% of TypeScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 45.2 MB, less than 80.82% of TypeScript online submissions for Remove Duplicates from Sorted Array.
