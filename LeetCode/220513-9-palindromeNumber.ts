function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const str: string = String(x);
  const len: number = str.length;
  for (let i = 0; i < len; i += 1) {
    if (str[i] !== str[len-1-i]) {
      return false;
    }
  }

  return true;
};

// Runtime: 172 ms, faster than 88.26% of TypeScript online submissions for Palindrome Number.
// Memory Usage: 51.8 MB, less than 64.49% of TypeScript online submissions for Palindrome Number.