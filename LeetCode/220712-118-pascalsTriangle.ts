//

function generate(numRows: number): number[][] {
  const result: number[][] = [[1]];

  for (let i = 2; i <= numRows; i += 1) {
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

  return result;
};

// Runtime: 96 ms, faster than 45.66% of TypeScript online submissions for Pascal's Triangle.
// Memory Usage: 42.9 MB, less than 64.15% of TypeScript online submissions for Pascal's Triangle.


// 다른이 풀이

var generate2 = function(numRows: number): number[][] {
  var pascal: number[][] = [];
  for (var i = 0; i < numRows; i++) {
    pascal[i] = [];
    pascal[i][0] = 1;
    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
    }
    pascal[i][i] = 1;
  }
  return pascal;
};
