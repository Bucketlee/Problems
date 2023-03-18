// https://school.programmers.co.kr/learn/courses/30/lessons/12987

function solution(A: number[], B: number[]) {
  const sortedA = A.slice().sort((a, b) => a - b)
  const sortedB = B.slice().sort((a, b) => a - b)

  let currentIndex = 0
  let score = 0
  for (let i = 0; i < sortedB.length; i += 1) {
    if (sortedA[currentIndex] < sortedB[i]) {
      currentIndex += 1
      score += 1
    }
  }

  return score
}
