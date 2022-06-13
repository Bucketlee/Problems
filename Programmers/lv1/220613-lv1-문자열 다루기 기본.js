// https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  const len = s.length;
  if (!(len === 4 || len === 6)) {
    return false;
  }

  for (let i = 0; i < len; i += 1) {
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}


// 다른이 풀이

function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}
