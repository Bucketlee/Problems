// https://leetcode.com/problems/plus-one/submissions/

function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; 0 <= i; i -= 1) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};

// Runtime: 72 ms, faster than 83.67% of TypeScript online submissions for Plus One.
// Memory Usage: 43.5 MB, less than 26.59% of TypeScript online submissions for Plus One.
