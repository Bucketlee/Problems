// https://leetcode.com/problems/length-of-last-word/

// 메모리 고려

function lengthOfLastWord(s: string): number {
  let lastWord = '';
  for (let i = s.length - 1; 0 <= i; i -= 1) {
    if (s[i] !== ' ') {
      lastWord = s[i] + lastWord;
    } else if (lastWord !== '') {
      return lastWord.length;
    }
  }

  return lastWord.length;
};

// Runtime: 114 ms, faster than 19.38% of TypeScript online submissions for Length of Last Word.
// Memory Usage: 42.6 MB, less than 81.65% of TypeScript online submissions for Length of Last Word.


// 다른이 풀이

function lengthOfLastWord2(s: string): number {
  const lastWord = s.trim().split(' ').pop();
  return lastWord ? lastWord.length : 0;
};
