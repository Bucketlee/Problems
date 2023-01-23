// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array: number[], n: number) {
  return array.reduce((result, num) => {
    const current = Math.abs(n - result)
    const comparison = Math.abs(n - num)
    if (current === comparison) {
      return result > num ? num : result
    }
    return current > comparison ? num : result
  })
}

// 다른이 풀이
let otherSolution = (r: number[], n: number) =>
  r
    .map((e) => [e, Math.abs(e - n)])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0]
