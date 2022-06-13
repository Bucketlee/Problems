// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  return s.split('').sort((a, b) => a > b ? -1 : 1).join('');
}


// 다른이 풀이

function solution(s) {
  return s
  .split("")
  .sort()
  .reverse()
  .join("");
}
