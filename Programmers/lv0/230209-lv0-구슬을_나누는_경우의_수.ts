// https://school.programmers.co.kr/learn/courses/30/lessons/120840

function solution(balls: number, share: number) {
  let numerator = 1
  let denominator = 1
  for (let i = 0; i < share; i += 1) {
    numerator *= balls - i
    denominator *= share - i
  }

  return numerator / denominator
}

// 다른이 풀이

const 팩토리얼 = (num: number): number =>
  num === 0 ? 1 : num * 팩토리얼(num - 1)

function solution(balls: number, share: number) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))
}
