// https://school.programmers.co.kr/learn/courses/30/lessons/120910

function solution(n: number, t: number) {
  return (2**t)*n;
}


// 다른이 풀이

function solution(n: number, t: number) {
  return n << t;
}
