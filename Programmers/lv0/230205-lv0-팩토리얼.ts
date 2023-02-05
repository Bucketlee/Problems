// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n: number) {
  let result = 1
  while (convertFactorialToNumber(result + 1) <= n) {
    result += 1
  }
  return result
}

function convertFactorialToNumber(factorial: number) {
  let number = 1
  for (let i = 2; i <= factorial; i += 1) {
    number *= i
  }
  return number
}

// 다른이 풀이

function solution(n: number) {
  let i = 1
  let f = 1
  while (f * i < n) f *= ++i
  return i
}
