// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n: number) {
  let target = n
  const primes = new Set()
  while (target > 1) {
    for (let i = 2; i <= target; i += 1) {
      if (target % i === 0) {
        primes.add(i)
        target = target / i
        break
      }
    }
  }

  return [...primes]
}
