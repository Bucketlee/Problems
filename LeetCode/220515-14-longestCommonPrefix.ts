function longestCommonPrefix(strs: string[]): string {
  let result: string = '';
  for (let i = 0; i < strs[0].length; i += 1) {
    for (let j = 1; j < strs.length; j += 1) {
      if (strs[j-1][i] !== strs[j][i]) return result;
    }
    result += strs[0][i];
  }
  return result;
};

// Runtime: 82 ms, faster than 70.41% of TypeScript online submissions for Longest Common Prefix.
// Memory Usage: 43.9 MB, less than 87.73% of TypeScript online submissions for Longest Common Prefix.