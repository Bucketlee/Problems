// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let bracketDepth = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      bracketDepth += 1;
    } else if (s[i] === ')') {
      bracketDepth -= 1;
    }

    if (bracketDepth < 0) {
      return false;
    }
  }

  return bracketDepth === 0 ? true : false;
}


// 다른이 풀이

function is_pair(s){
  var result = s.match(/(\(|\))/g);
  return result[0] == '(' && result.length % 2 == 0 ? true : false
}
