// https://school.programmers.co.kr/learn/courses/30/lessons/120846

function solution(n: number) {
  let count = 0
  for (let i = 4; i <= n; i += 1) {
    for (let j = 2; j ** 2 <= i; j += 1) {
      if (i % j === 0) {
        count += 1
        break
      }
    }
  }
  return count
}
