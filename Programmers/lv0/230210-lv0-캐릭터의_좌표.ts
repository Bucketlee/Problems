// https://school.programmers.co.kr/learn/courses/30/lessons/120861

type Key = 'right' | 'left' | 'up' | 'down'

function solution(keyinput: Key[], board: [number, number]) {
  let x = 0
  let y = 0
  keyinput.forEach((key) => {
    if (key === 'left') {
      if (Math.abs(x - 1) < board[0] / 2) {
        x -= 1
      }
    } else if (key === 'right') {
      if (Math.abs(x + 1) < board[0] / 2) {
        x += 1
      }
    } else if (key === 'down') {
      if (Math.abs(y - 1) < board[1] / 2) {
        y -= 1
      }
    } else {
      if (Math.abs(y + 1) < board[1] / 2) {
        y += 1
      }
    }
  })

  return [x, y]
}

// 다른이 풀이

function solution(keyinput: Key[], board: [number, number]) {
  let res = [0, 0]
  for (let p of keyinput) {
    switch (p) {
      case 'left':
        if (-res[0] < board[0] / 2 - 1) res[0]--
        break
      case 'right':
        if (res[0] < board[0] / 2 - 1) res[0]++
        break
      case 'up':
        if (res[1] < board[1] / 2 - 1) res[1]++
        break
      case 'down':
        if (-res[1] < board[1] / 2 - 1) res[1]--
        break
    }
  }
  return res
}
