// https://school.programmers.co.kr/learn/courses/30/lessons/160585

function solution(board: [string, string, string][]): number {
  let countOfO = 0
  let countOfX = 0
  let countOfOBingo = 0
  let countOfXBingo = 0

  for (let i = 0; i < 3; i += 1) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === 'O') {
        countOfOBingo += 1
      }
      if (board[i][0] === 'X') {
        countOfXBingo += 1
      }
    }

    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] === 'O') {
        countOfOBingo += 1
      }
      if (board[0][i] === 'X') {
        countOfXBingo += 1
      }
    }

    for (let j = 0; j < 3; j += 1) {
      if (board[i][j] === 'O') {
        countOfO += 1
      }
      if (board[i][j] === 'X') {
        countOfX += 1
      }
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[1][1] === 'O') {
      countOfOBingo += 1
    }
    if (board[1][1] === 'X') {
      countOfXBingo += 1
    }
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    if (board[1][1] === 'O') {
      countOfOBingo += 1
    }
    if (board[1][1] === 'X') {
      countOfXBingo += 1
    }
  }

  if (countOfOBingo > 0) {
    if (countOfXBingo === 0 && countOfO === countOfX + 1) {
      return 1
    }
  }

  if (countOfXBingo === 1) {
    if (countOfOBingo === 0 && countOfO === countOfX) {
      return 1
    }
  }

  if (countOfOBingo === 0 && countOfXBingo === 0) {
    if (countOfO === countOfX || countOfO === countOfX + 1) {
      return 1
    }
  }

  return 0
}
