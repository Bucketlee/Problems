// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n: number, left: number, right: number) {
  const result = []

  let row = Math.floor(left / n) + 1
  let column = (left % n) + 1

  for (let j = left; j <= right; j += 1) {
    const max = row < column ? column : row
    result.push(max)

    if (column === n) {
      column = 1
      row += 1
    } else {
      column += 1
    }
  }

  return result
}

// 다른이풀이

function solution(n: number, left: number, right: number) {
  var answer = []

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(`${i / n}`)) + 1)
  }

  return answer
}
