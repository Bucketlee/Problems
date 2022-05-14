// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s: string): number {
  const obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900,
  }

  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'I' && s[i+1] === 'V') {
      result += obj['IV'];
      i += 1;
      continue;
    }

    if (s[i] === 'I' && s[i+1] === 'X') {
      result += obj['IX'];
      i += 1;
      continue;
    }

    if (s[i] === 'X' && s[i+1] === 'L') {
      result += obj['XL'];
      i += 1;
      continue;
    }

    if (s[i] === 'X' && s[i+1] === 'C') {
      result += obj['XC'];
      i += 1;
      continue;
    }

    if (s[i] === 'C' && s[i+1] === 'D') {
      result += obj['CD'];
      i += 1;
      continue;
    }

    if (s[i] === 'C' && s[i+1] === 'M') {
      result += obj['CM'];
      i += 1;
      continue;
    }

    result += obj[s[i]];
  }

  return result;
};

// Runtime: 134 ms, faster than 84.90% of TypeScript online submissions for Roman to Integer.
// Memory Usage: 49.4 MB, less than 25.41% of TypeScript online submissions for Roman to Integer.