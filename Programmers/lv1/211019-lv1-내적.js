// https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let answer = 0;
  a.map((el, i) => {
    answer = answer + el*b[i]
  });
  return answer;
}


// 다른이 풀이

function solution(a, b) {
  return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
