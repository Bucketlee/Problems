// https://leetcode.com/problems/implement-strstr/

function strStr(haystack: string, needle: string): number {
  const len = needle.length;
  for (let i = 0; i <= haystack.length - len; i += 1) {
    let isSame = false;
    for (let j = 0; j < len; j += 1) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }

      if (j === len-1) {
        isSame = true;
      }
    }
    if (isSame) {
      return i;
    }
  }
  return -1;
};


// Runtime: 110 ms, faster than 17.99% of TypeScript online submissions for Implement strStr().
// Memory Usage: 42.7 MB, less than 80.66% of TypeScript online submissions for Implement strStr().
