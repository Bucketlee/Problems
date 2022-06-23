// https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  const str = '' + n;
  const strArr = str.split('');

  strArr.sort((a, b) => b - a);
  const newArr = strArr.join('');

  return +newArr;
}


// 다른이 풀이

function solution(n) {
  // 문자풀이
  return parseInt((n+"").split("").sort().reverse().join(""));
}
