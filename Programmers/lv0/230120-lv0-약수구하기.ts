// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n: number) {
  const front = []
  const back = []
  for (let i = 1; i ** 2 <= n; i += 1) {
    if (n % i === 0) {
      const backNumber = n / i
      front.push(i)
      if (backNumber !== i) {
        back.unshift(backNumber)
      }
    }
  }
  return [...front, ...back]
}
