// https://leetcode.com/problems/sqrtx/

function mySqrt(x: number): number {
  let i = 1;

  while (i*i <= x) {
    i += 1;
  }

  return i - 1;
};

// Runtime: 184 ms, faster than 12.17% of TypeScript online submissions for Sqrt(x).
// Memory Usage: 45 MB, less than 31.98% of TypeScript online submissions for Sqrt(x).


// 다른이 풀이

function mySqrt1(x: number): number {
  let left = 1;
  let right = Math.floor(x / 2) + 1;
  let mid: number;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
}
