// https://school.programmers.co.kr/learn/courses/30/lessons/120908

// 풀이 1

function solution(str1: string, str2: string) {
  return str1.includes(str2) ? 1 : 2;
}

// 풀이 2

function solution(str1: string, str2: string) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
