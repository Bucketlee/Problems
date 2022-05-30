// https://leetcode.com/problems/longest-palindromic-substring/

function longestPalindrome(s: string): string {
  let currentLen = s.length;
  while (currentLen > 1) {
    for (let i = 0; i + currentLen <= s.length; i += 1) {
      const str = s.slice(i, i + currentLen);
      if (checkPalindrome(str)) {
        return str;
      }
    }

    currentLen -= 1;
  }

  return s[0];
};

function checkPalindrome(s: string): boolean {
  const len = s.length;
  for (let i = 0; i < len/2; i += 1) {
    if (s[i] !== s[len-1-i]) {
      return false;
    }
  }
  return true;
}

// Runtime: 1598 ms, faster than 17.95% of TypeScript online submissions for Longest Palindromic Substring.
// Memory Usage: 48.8 MB, less than 48.35% of TypeScript online submissions for Longest Palindromic Substring.
