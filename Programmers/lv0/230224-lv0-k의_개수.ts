// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i: number, j: number, k: number) {
  let count = 0
  for (let m = i; m <= j; m += 1) {
    const string = '' + m
    const exception = string.replaceAll(k, '')
    count += string.length - exception.length
  }

  return count
}

// 다른이 풀이
s
function solution(i: number, j: number, k: number) {
  let a = ''
  for (i; i <= j; i++) {
    a += i
  }

  return a.split(`${k}`).length - 1
}
