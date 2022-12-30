// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }

  return sum;
}


// 다른이풀이

function solution(n) {
  var half = Math.floor(n/2);
  return half*(half+1);
}
