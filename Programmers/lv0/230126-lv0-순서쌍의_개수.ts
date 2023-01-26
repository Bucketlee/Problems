// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n: number) {
  let count = 0
  for (let i = 1; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      count += 2
    }
  }

  return Math.sqrt(n) % 1 === 0 ? count + 1 : count
}
