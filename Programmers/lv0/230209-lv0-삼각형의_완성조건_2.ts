// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides: [number, number]) {
  const smallerThen = sides.reduce((acc, cur) => acc + cur)
  const biggerThen = Math.abs(sides.reduce((acc, cur) => acc - cur))
  return smallerThen - biggerThen - 1
}

// 다른이 풀이

function solution(sides: [number, number]) {
  return Math.min(...sides) * 2 - 1
}
