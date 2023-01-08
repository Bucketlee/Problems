// https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n: number) {
  for (let i = 1; i**2 <= n; i += 1) {
    if (i**2 === n) {
      return 1;
    }
  }

  return 2;
}


// 다른이 풀이

function solution(n: number) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}
