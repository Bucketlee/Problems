// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n: number) {
  const [max, min] = n > 6 ? [n, 6] : [6, n]
  let leastCommonMultiple = max
  while (leastCommonMultiple % min !== 0) {
    leastCommonMultiple += max
  }
  return leastCommonMultiple / 6
}
