// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
  let result = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'p' || s[i] === 'P') {
      result += 1;
    } else if (s[i] === 'y' || s[i] === 'Y') {
      result -= 1;
    }
  }
  return result === 0 ? true : false;
}

// 다른이 풀이

function numPY(s){
  //함수를 완성하세요
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
