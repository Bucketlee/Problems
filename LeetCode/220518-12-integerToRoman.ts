// https://leetcode.com/problems/integer-to-roman/

function intToRoman(num: number): string {
  let str: string = '';
  const integer: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  for (let i = 0; i < integer.length; i += 1) {
    const repeatCount = Math.floor(num/integer[i]);
    if (repeatCount > 0) {
      str += roman[i].repeat(repeatCount);
      num -= repeatCount*integer[i];
    }
  }
  return str;
};

// Runtime: 258 ms, faster than 17.67% of TypeScript online submissions for Integer to Roman.
// Memory Usage: 48.1 MB, less than 79.83% of TypeScript online submissions for Integer to Roman.
