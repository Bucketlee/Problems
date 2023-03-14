// https://school.programmers.co.kr/learn/courses/30/lessons/12938

function solution(n: number, s: number) {
  if (n > s) {
    return [-1]
  }
  const ceiledAverage = Math.ceil(s / n)
  const exceededCount = ceiledAverage * n - s

  const result = []
  for (let i = 1; i <= n; i += 1) {
    result.push(i <= exceededCount ? ceiledAverage - 1 : ceiledAverage)
  }

  return result
}
