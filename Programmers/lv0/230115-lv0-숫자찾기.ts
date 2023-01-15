// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num: number[], k: number) {
  const result = num.toString().indexOf(k.toString());
  return result === -1 ? -1 : result + 1;
}
