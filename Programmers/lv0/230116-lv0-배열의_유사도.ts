// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1: string[], s2: string[]) {
  return s1.reduce((count, str) => s2.includes(str) ? count + 1 : count, 0);
}


// 다른이 풀이

function solution(s1: string[], s2: string[]) {
  const intersection = s1.filter((x) => s2.includes(x));
  return intersection.length;
}
