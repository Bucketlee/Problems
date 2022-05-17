// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let maxLen: number = 0;
  let str: string = '';
  for (let i = 0; i < s.length; i += 1) {
    const indexOfStr: number = str.indexOf(s[i]);
    if (indexOfStr < 0) {
      str += s[i];
    } else {
      if (str.length > maxLen) maxLen = str.length;
      str = str.slice(indexOfStr + 1) + s[i];
    }
  }

  return str.length > maxLen ? str.length : maxLen;
};

// Runtime: 172 ms, faster than 41.79% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 48.4 MB, less than 59.93% of TypeScript online submissions for Longest Substring Without Repeating Characters.