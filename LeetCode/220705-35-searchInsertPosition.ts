// https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] >= target) {
      return i;
    }
  }

  return nums.length;
};


// O (log n) time complexity.

function searchInsertTimeComplexity(nums: number[], target: number): number {
  return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array: number[], target: number, start: number, end: number) {
  if (start > end) return start;

  const midPoint = Math.floor((start + end)/2);

  if (array[midPoint] === target) return midPoint;

  if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
  if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}

// Runtime: 72 ms, faster than 88.33% of TypeScript online submissions for Search Insert Position.
// Memory Usage: 44.6 MB, less than 34.59% of TypeScript online submissions for Search Insert Position.
