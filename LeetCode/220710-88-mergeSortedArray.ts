// https://leetcode.com/problems/merge-sorted-array/

/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m, j = 0; i < nums1.length; i += 1, j += 1) {
      nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a-b);
};

// Runtime: 125 ms, faster than 15.13% of TypeScript online submissions for Merge Sorted Array.
// Memory Usage: 44.1 MB, less than 56.55% of TypeScript online submissions for Merge Sorted Array.


// 다른이 풀이

function merge1(nums1: number[], m: number, nums2: number[], n: number): void {
  var insertPositionOfNums1 = m + n - 1;
  m -= 1;
  n -= 1;
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[insertPositionOfNums1] = nums1[m];
      m -= 1;
    } else {
      nums1[insertPositionOfNums1] = nums2[n];
      n -= 1;
    }
    insertPositionOfNums1 -= 1;
  }
}
