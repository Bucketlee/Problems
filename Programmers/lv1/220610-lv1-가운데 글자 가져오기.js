// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const mid = s.length/2;
  return mid%1 === 0 ? s[mid-1] + s[mid] : s[mid-0.5];
}


// 다른이 풀이

function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
