// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price: number) {
  return Math.floor(
    price *
      (price >= 500000
        ? 0.8
        : price >= 300000
        ? 0.9
        : price >= 100000
        ? 0.95
        : 1),
  )
}

// 다른이 풀이

const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
]

function solution(price: number) {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100)
  return price
}
