// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i += 1) {
    answer.push(x*i);
  }
  return answer;
}


// 다른이 풀이

function solution(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
