// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  if (arr.length <= 1) {
    return [ -1 ];
  }

  const min = Math.min(...arr);
  const targetIdx = arr.indexOf(min);
  const result = [ ...arr.slice(0, targetIdx), ...arr.slice(targetIdx + 1) ];

  return result;
}


// 다른이 풀이

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if(arr.length<1)return[-1];
  return arr;
}
