// https://programmers.co.kr/learn/courses/30/lessons/12947https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  const str = '' + x;

  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += (+str[i]);
  }

  return x%sum === 0 ? true : false;
}
