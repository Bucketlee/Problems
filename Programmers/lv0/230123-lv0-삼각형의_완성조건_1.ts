// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides: number[]) {
  const sortedSides = sides.slice().sort((a, b) => b - a)
  return sortedSides[0] >= sortedSides[1] + sortedSides[2] ? 2 : 1
}
