// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots: [number, number][]) {
  const len1 = getLengthBetweenVertices(dots[0], dots[1])
  const len2 = getLengthBetweenVertices(dots[0], dots[2])
  const len3 = getLengthBetweenVertices(dots[0], dots[3])
  const [_, second, third] = [len1, len2, len3].sort((a, b) => b - a)
  return Math.sqrt(second * third)
}

function getLengthBetweenVertices(
  dot1: [number, number],
  dot2: [number, number],
) {
  const len1 = (dot1[0] - dot2[0]) ** 2
  const len2 = (dot1[1] - dot2[1]) ** 2
  return Math.sqrt(Math.abs(len1 ** 2) + Math.abs(len2 ** 2))
}

// 다른이 풀이

function solution(dots: [number, number][]) {
  let x = [],
    y = []

  for (let pos of dots) {
    x.push(pos[0])
    y.push(pos[1])
  }

  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
}
