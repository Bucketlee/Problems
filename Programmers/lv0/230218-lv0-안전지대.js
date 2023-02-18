// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  const copy = board.slice();
  const len = copy.length;
  for (let row = 0; row < len; row += 1) {
    for (let column = 0; column < len; column += 1) {
      if (copy[row][column] === 1) {
        if (copy[row][column - 1] === 0) {
          copy[row][column - 1] = -1;
        }
        if (copy[row][column + 1] === 0) {
          copy[row][column + 1] = -1;
        }

        if (copy[row - 1]) {
          if (copy[row - 1][column - 1] === 0) {
            copy[row - 1][column - 1] = -1;
          }

          if (copy[row - 1][column] === 0) {
            copy[row - 1][column] = -1;
          }

          if (copy[row - 1][column + 1] === 0) {
            copy[row - 1][column + 1] = -1;
          }
        }

        if (copy[row + 1]) {
          if (copy[row + 1][column - 1] === 0) {
            copy[row + 1][column - 1] = -1;
          }
          if (copy[row + 1][column] === 0) {
            copy[row + 1][column] = -1;
          }
          if (copy[row + 1][column + 1] === 0) {
            copy[row + 1][column + 1] = -1;
          }
        }
      }
    }
  }

  return copy.reduce((count, d) => {
    return count + d.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);
  }, 0);
}

// 다른이 풀이

function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.forEach((row, y, self) =>
    row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}

// 다른이 풀이 2

function solution(b) {
  const directions = [
    [0, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  let bombSet = new Set();

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      if (b[i][j] == 1) {
        directions.forEach((el) => {
          let [nextX, nextY] = el;
          [nextX, nextY] = [i + nextX, j + nextY];
          if (
            nextX >= 0 &&
            nextX < b.length &&
            nextY >= 0 &&
            nextY < b[i].length
          ) {
            bombSet.add(nextX + " " + nextY);
          }
        });
      }
    }
  }
  return b.length * b[0].length - bombSet.size;
}
