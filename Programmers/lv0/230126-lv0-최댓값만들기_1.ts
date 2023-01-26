// https://school.programmers.co.kr/learn/courses/30/lessons/120847

function solution(numbers: number[]) {
  const sortedNumbers = numbers.slice().sort((a, b) => b - a)
  return sortedNumbers[0] * sortedNumbers[1]
}
