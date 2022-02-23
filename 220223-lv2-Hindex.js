// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
  let result = null;
  citations
    .sort((a, b) => b - a)
    .forEach((el, i) => {
      if (el < i + 1 && result === null) {
        result = i;
      } else if ((el === i + 1 || citations.length === i + 1) && result === null) {
        result = i + 1;
      }
    });
  return result;
}

// 다른이 풀이

function solution(citations) {
  citations = citations.sort(sorting);
  var i = 0;
  while(i + 1 <= citations[i]){
      i++;
  }
  return i;


  function sorting(a, b){
      return b - a;
  }
}