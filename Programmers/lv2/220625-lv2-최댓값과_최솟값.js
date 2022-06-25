// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(' ').map(str => +str);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return min + ' ' + max;
}


// 다른이 풀이

function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr)+' '+Math.max(...arr);
}
