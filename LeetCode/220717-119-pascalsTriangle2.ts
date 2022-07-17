// https://leetcode.com/problems/pascals-triangle-ii/

function getRow(rowIndex: number): number[] {
  const result: number[][] = [[1]];

  for (let i = 2; i <= rowIndex + 1; i += 1) {
    const row: number[] = [];
    for (let j = 0; j < i; j += 1) {
      if (j === 0 || j === i-1) {
        row.push(1);
      } else {
        const sum = result[i-2][j-1] + result[i-2][j];
        row.push(sum);
      }
    }
    result.push(row);
  }

  return result[rowIndex];
};

// Runtime: 72 ms, faster than 84.43% of TypeScript online submissions for Pascal's Triangle II.
// Memory Usage: 44.1 MB, less than 32.08% of TypeScript online submissions for Pascal's Triangle II.


// 다른이 풀이

function getRow2(r: number): number[] {
  let ans: number[] = [1]
  let temp: number = 1
  for (let i:number = 1; i <= r; i += 1) {
    temp = temp*(r-i+1)/i
    ans.push(temp)
  }
  return ans
};
