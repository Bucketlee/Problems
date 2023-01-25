// https://school.programmers.co.kr/learn/courses/30/lessons/120880

function solution(numlist: number[], n: number) {
  return numlist.slice().sort((a, b) => {
    if (Math.abs(n - a) === Math.abs(n - b)) {
      return b - a
    }
    return Math.abs(n - a) - Math.abs(n - b)
  })
}

// 다른이 풀이

function solution(numlist: number[], n: number) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a)
}
