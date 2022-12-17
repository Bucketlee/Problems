// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  const sortedScore = score.sort((a,b) => b-a);
  const len = sortedScore.length;

  let sums = 0;
  for (let i = m-1; i < len; i += m) {
      sums += sortedScore[i]*m;
  }

  return sums;
}


// 다른이 풀이

function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
  for (let i = 0; i < sortedScore.length; i += m) {
      answer += sortedScore[i] * m;
  }
  return answer;
}
