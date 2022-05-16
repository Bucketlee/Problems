// https://leetcode.com/problems/zigzag-conversion

function convert(s: string, numRows: number): string {
  const strs: string[] = [];
  let row: number = 0;
  let isIncrease = false;

  for (let i = 0; i < s.length; i += 1) {
    if (!strs[row]) {
      strs[row] = s[i];
    } else {
      strs[row] += s[i];
    }

    if (row === 0 || row === numRows - 1) {
      isIncrease = !isIncrease;
    }

    if (isIncrease) {
      row += 1;
    } else {
      row -= 1;
    }
  }

  return strs.join('');
};

// Runtime: 116 ms, faster than 67.82% of TypeScript online submissions for Zigzag Conversion.
// Memory Usage: 47.6 MB, less than 66.21% of TypeScript online submissions for Zigzag Conversion.
