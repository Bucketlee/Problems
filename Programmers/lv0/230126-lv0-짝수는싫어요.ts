// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n: number) {
  const result: number[] = []
  for (let i = 1; i <= n; i += 2) {
    result.push(i)
  }

  return result
}
