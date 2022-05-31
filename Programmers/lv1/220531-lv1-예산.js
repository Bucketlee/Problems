// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a-b);
  for (let i = 0; i < d.length; i += 1) {
    budget -= d[i];
    if (budget < 0) {
      return i;
    }
  }
  return d.length;
}