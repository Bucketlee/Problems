// https://programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  const str = '' + n;

  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += (+str[i]);
  }

  return sum;
}


// 다른이 풀이

function solution(n){
  // 쉬운방법
  return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
