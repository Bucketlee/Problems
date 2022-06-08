// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  for (let i = 2; i < n; i += 1) {
    if (n%i === 1) {
      return i;
    }
  }
}


// 다른이 풀이

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}