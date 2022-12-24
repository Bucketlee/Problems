// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let result = 0;
  const len = p.length;
  for (let i = 0; i <= t.length - len; i += 1) {
    target = t.slice(i, i + len);
    if (+target <= +p) {
      result += 1;
    }
  }

  return result;
}


// 다른이 풀이

function solution(t, p) {
  let count = 0;
  for(let i=0; i<=t.length-p.length; i++) {
    let value = t.slice(i, i+p.length);
    if(+p >= +value) count++;
  }
  return count;
}
